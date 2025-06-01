import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { supabase, type Person } from '@/lib/supabase';

type PersonFormData = Omit<Person, 'id' | 'created_at'>;

export function PersonForm() {
  const { register, handleSubmit, reset } = useForm<PersonFormData>();

  const onSubmit = async (data: PersonFormData) => {
    try {
      const { error } = await supabase
        .from('persons')
        .insert([data]);
      
      if (error) throw error;
      
      reset();
      // You might want to add a success notification here
    } catch (error) {
      console.error('Error submitting person:', error);
      // You might want to add an error notification here
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('name')}
          placeholder="Name"
          className="w-full"
        />
      </div>
      <div>
        <Input
          {...register('age', { valueAsNumber: true })}
          type="number"
          placeholder="Age"
          className="w-full"
        />
      </div>
      <div>
        <Input
          {...register('last_seen_location')}
          placeholder="Last Seen Location"
          className="w-full"
        />
      </div>
      <div>
        <Input
          {...register('photo_url')}
          placeholder="Photo URL"
          className="w-full"
        />
      </div>
      <div>
        <Input
          {...register('contact_info')}
          placeholder="Contact Information"
          className="w-full"
        />
      </div>
      <div>
        <textarea
          {...register('description')}
          placeholder="Description"
          className="w-full min-h-[100px] p-2 rounded-md border border-input"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
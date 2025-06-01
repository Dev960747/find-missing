import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase, type Person } from '@/lib/supabase';

export function PersonList() {
  const { data: persons, isLoading, error } = useQuery({
    queryKey: ['persons'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('persons')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Person[];
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading persons</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {persons?.map((person) => (
        <div key={person.id} className="border rounded-lg p-4 shadow-sm">
          <img
            src={person.photo_url}
            alt={person.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-sm text-gray-600">Age: {person.age}</p>
          <p className="text-sm text-gray-600">Last seen: {person.last_seen_location}</p>
          <p className="text-sm text-gray-600">Status: {person.status}</p>
          <p className="mt-2 text-sm">{person.description}</p>
          <div className="mt-4">
            <p className="text-sm font-semibold">Contact:</p>
            <p className="text-sm">{person.contact_info}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
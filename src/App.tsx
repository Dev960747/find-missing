import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersonForm } from './components/PersonForm';
import { PersonList } from './components/PersonList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Missing Persons Database</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Add New Person</h2>
                <PersonForm />
              </div>
            </div>
            
            <div className="md:col-span-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Missing Persons List</h2>
                <PersonList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
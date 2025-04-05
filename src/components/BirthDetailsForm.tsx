import React, { useState } from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { BirthDetails } from '../types';

interface Props {
  onSubmit: (details: BirthDetails) => void;
}

export default function BirthDetailsForm({ onSubmit }: Props) {
  const [details, setDetails] = useState<BirthDetails>({
    date: '',
    time: '',
    location: '',
    latitude: '',
    longitude: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          Birth Date
        </label>
        <input
          type="date"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={details.date}
          onChange={(e) => setDetails({ ...details, date: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          Birth Time
        </label>
        <input
          type="time"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={details.time}
          onChange={(e) => setDetails({ ...details, time: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Birth Location
        </label>
        <input
          type="text"
          required
          placeholder="City, Country"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={details.location}
          onChange={(e) => setDetails({ ...details, location: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Latitude
          </label>
          <input
            type="text"
            required
            placeholder="e.g. 51.5074"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={details.latitude}
            onChange={(e) => setDetails({ ...details, latitude: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Longitude
          </label>
          <input
            type="text"
            required
            placeholder="e.g. -0.1278"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={details.longitude}
            onChange={(e) => setDetails({ ...details, longitude: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
      >
        Generate Birth Chart
      </button>
    </form>
  );
}
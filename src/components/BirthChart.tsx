import React from 'react';
import { ChartData } from '../types';

interface Props {
  data: ChartData;
}

export default function BirthChart({ data }: Props) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
        Your Birth Chart
      </h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Ascendant (Lagna)</h3>
        <p className="text-gray-700">{data.ascendant}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Houses</h3>
          <div className="space-y-2">
            {data.houses.map((house) => (
              <div key={house.number} className="flex justify-between items-center">
                <span className="font-medium">House {house.number}</span>
                <span className="text-gray-600">
                  {house.sign} ({house.degree}°)
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Planetary Positions</h3>
          <div className="space-y-2">
            {data.planets.map((planet) => (
              <div key={planet.name} className="flex justify-between items-center">
                <span className="font-medium">{planet.name}</span>
                <span className="text-gray-600">
                  {planet.sign} ({planet.degree}°) in House {planet.house}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
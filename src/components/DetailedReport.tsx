import React from 'react';
import { AstrologicalReport } from '../types';
import { Gem, Star, Sun, Moon, Shield, Hash } from 'lucide-react';

interface Props {
  report: AstrologicalReport;
}

export default function DetailedReport({ report }: Props) {
  return (
    <div className="space-y-8">
      {/* Remedies Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Recommended Remedies</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {report.remedies.map((remedy, index) => (
            <div key={index} className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">{remedy.type}</h3>
              <p className="text-gray-700 mb-3">{remedy.description}</p>
              <div className="bg-white rounded p-3">
                <h4 className="font-medium text-gray-800 mb-2">Procedure:</h4>
                <p className="text-gray-600">{remedy.procedure}</p>
              </div>
              <div className="mt-3">
                <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {remedy.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Predictions Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Star className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Future Predictions</h2>
        </div>
        <div className="space-y-4">
          {report.predictions.map((prediction, index) => (
            <div key={index} className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-purple-800 mb-1">{prediction.aspect}</h3>
              <p className="text-gray-600 mb-2">{prediction.description}</p>
              <span className="text-sm text-purple-600 font-medium">{prediction.timeframe}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Doshas Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Sun className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Dosha Analysis</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {report.doshas.map((dosha, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">{dosha.name}</h3>
              <div className="mb-2">
                <span className="inline-block px-2 py-1 rounded bg-purple-100 text-purple-800 text-sm">
                  Level: {dosha.level}
                </span>
              </div>
              <p className="text-gray-600 mb-3">{dosha.description}</p>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Balancing Tips:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {dosha.balancingTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gemstones Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Gem className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Recommended Gemstones</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {report.gemstones.map((gemstone, index) => (
            <div key={index} className="border border-purple-100 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-2">{gemstone.name}</h3>
              <div className="mb-3">
                <h4 className="font-medium text-gray-800 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {gemstone.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-50 rounded p-3">
                <h4 className="font-medium text-gray-800 mb-1">How to Wear:</h4>
                <p className="text-gray-600">{gemstone.wearingMethod}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Numerology Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Hash className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">Numerological Insights</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <h3 className="text-sm text-purple-600 mb-1">Life Path Number</h3>
            <span className="text-3xl font-bold text-purple-800">{report.numerology.lifePath}</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <h3 className="text-sm text-purple-600 mb-1">Destiny Number</h3>
            <span className="text-3xl font-bold text-purple-800">{report.numerology.destiny}</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <h3 className="text-sm text-purple-600 mb-1">Soul Number</h3>
            <span className="text-3xl font-bold text-purple-800">{report.numerology.soul}</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
          <h3 className="font-semibold text-purple-800 mb-2">Interpretation</h3>
          <p className="text-gray-700">{report.numerology.interpretation}</p>
        </div>
      </section>
    </div>
  );
}
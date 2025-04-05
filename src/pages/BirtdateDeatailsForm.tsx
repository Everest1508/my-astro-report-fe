import { useState } from 'react';
import { Star } from 'lucide-react';
import BirthDetailsForm from '../components/BirthDetailsForm';
import { ChartData, AstrologicalReport } from '../types';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [report, setReport] = useState<AstrologicalReport | null>(null);

  const handleSubmit = async () => {
    // This is a mock response. In a real app, you would call an astrology API
    const navigate = useNavigate();
    const mockChartData: ChartData = {
      ascendant: "Libra",
      houses: [
        { number: 1, sign: "Libra", degree: 15 },
        { number: 2, sign: "Scorpio", degree: 20 },
        { number: 3, sign: "Sagittarius", degree: 25 },
        { number: 4, sign: "Capricorn", degree: 30 },
        { number: 5, sign: "Aquarius", degree: 5 },
        { number: 6, sign: "Pisces", degree: 10 },
        { number: 7, sign: "Aries", degree: 15 },
        { number: 8, sign: "Taurus", degree: 20 },
        { number: 9, sign: "Gemini", degree: 25 },
        { number: 10, sign: "Cancer", degree: 30 },
        { number: 11, sign: "Leo", degree: 5 },
        { number: 12, sign: "Virgo", degree: 10 },
      ],
      planets: [
        { name: "Sun", sign: "Taurus", degree: 15, house: 8 },
        { name: "Moon", sign: "Cancer", degree: 20, house: 10 },
        { name: "Mercury", sign: "Gemini", degree: 10, house: 9 },
        { name: "Venus", sign: "Pisces", degree: 25, house: 6 },
        { name: "Mars", sign: "Aries", degree: 5, house: 7 },
        { name: "Jupiter", sign: "Sagittarius", degree: 12, house: 3 },
        { name: "Saturn", sign: "Capricorn", degree: 28, house: 4 },
      ],
    };

    const mockReport: AstrologicalReport = {
      remedies: [
        {
          type: "Gemstone Therapy",
          description: "Wearing a Blue Sapphire can help balance Saturn's influence",
          procedure: "Wear a 2-3 carat Blue Sapphire set in silver on the middle finger of your right hand",
          benefits: [
            "Reduces negative effects of Saturn",
            "Improves career prospects",
            "Enhances discipline and focus"
          ]
        },
        {
          type: "Mantra Chanting",
          description: "Regular chanting of Saturn mantras",
          procedure: "Chant 'Om Sham Shanaishcharaya Namaha' 108 times daily",
          benefits: [
            "Pacifies Saturn's influence",
            "Brings stability in life",
            "Reduces obstacles"
          ]
        }
      ],
      predictions: [
        {
          aspect: "Career",
          description: "A period of professional growth and new opportunities is approaching",
          timeframe: "Next 6 months"
        },
        {
          aspect: "Relationships",
          description: "Favorable time for strengthening personal bonds",
          timeframe: "Current phase"
        }
      ],
      doshas: [
        {
          name: "Vata",
          level: "High",
          description: "Your Vata dosha is currently elevated",
          balancingTips: [
            "Follow a regular daily routine",
            "Practice gentle yoga",
            "Eat warm, cooked foods"
          ]
        },
        {
          name: "Pitta",
          level: "Balanced",
          description: "Your Pitta dosha is in equilibrium",
          balancingTips: [
            "Maintain current dietary habits",
            "Continue moderate exercise",
            "Practice cooling breathing exercises"
          ]
        },
        {
          name: "Kapha",
          level: "Low",
          description: "Your Kapha dosha needs strengthening",
          balancingTips: [
            "Include healthy fats in diet",
            "Practice grounding exercises",
            "Get adequate rest"
          ]
        }
      ],
      gemstones: [
        {
          name: "Blue Sapphire (Neelam)",
          benefits: [
            "Strengthens Saturn's positive influence",
            "Brings career success",
            "Improves mental clarity"
          ],
          wearingMethod: "Wear on the middle finger of the right hand on Saturday morning"
        },
        {
          name: "Pearl (Moti)",
          benefits: [
            "Enhances Moon's beneficial effects",
            "Improves emotional balance",
            "Strengthens intuition"
          ],
          wearingMethod: "Wear on the little finger of the right hand on Monday morning"
        }
      ],
      numerology: {
        lifePath: 7,
        destiny: 4,
        soul: 9,
        interpretation: "Your Life Path number 7 indicates a highly analytical and spiritual nature. Combined with Destiny number 4, you have a practical approach to achieving your spiritual goals. The Soul number 9 suggests a humanitarian streak in your personality."
      }
    };

    setChartData(mockChartData);
    setReport(mockReport);
    navigate('/result', { state: { chartData, report } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-12 h-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cosmic Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your astrological birth chart and receive personalized insights
            about your cosmic blueprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Enter Your Birth Details
            </h2>
            <BirthDetailsForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
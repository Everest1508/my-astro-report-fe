import { useLocation, useNavigate } from 'react-router-dom';
import BirthChart from '../components/BirthChart';
import DetailedReport from '../components/DetailedReport';
import { ChartData, AstrologicalReport } from '../types';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as {
    chartData: ChartData;
    report: AstrologicalReport;
  };

  if (!state?.chartData || !state?.report) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-700">No data found. Please fill the form first.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <BirthChart data={state.chartData} />
      <DetailedReport report={state.report} />
    </div>
  );
};

export default Result;

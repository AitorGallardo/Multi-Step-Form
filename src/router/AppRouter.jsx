import { Navigate, Route, Routes } from 'react-router-dom';
import { InfoPage } from '../pages/InfoPage';
import { PlanPage } from '../pages/PlanPage';
import { AddonsPage } from '../pages/AddonsPage';
import { SummaryPage } from '../pages/SummaryPage';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/firstStep' element={<InfoPage />} />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <Routes>
                <Route path='/secondStep' element={<PlanPage />} />
                <Route path='/thirdStep' element={<AddonsPage />} />
                <Route path='/fourthStep' element={<SummaryPage />} />
                <Route path='/*' element={<Navigate to='/firstStep' />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

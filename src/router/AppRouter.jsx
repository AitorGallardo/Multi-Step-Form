import { Navigate, Route, Routes } from 'react-router-dom'
import { InfoPage } from '../pages/InfoPage'
import { PlanPage } from '../pages/PlanPage'
import { AddonsPage } from '../pages/AddonsPage'
import { SummaryPage } from '../pages/SummaryPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/firstStep" element={<InfoPage />} />
            <Route path="/secondStep" element={<PlanPage />} />
            <Route path="/thirdStep" element={<AddonsPage />} />
            <Route path="/fourthStep" element={<SummaryPage />} />
            <Route path='/*' element={<Navigate to='/fourthStep' />} />
            {/* <Route path='/*' element={<Navigate to='/firstStep' />} /> */}
        </Routes>
    </>

  )
}

import { useNavigate } from 'react-router-dom';

export const useNavigateForms = ({backNavigation = '', nextNavigation = ''}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(backNavigation, {
          replace: true,
        });
      };
      const goNext = () => {
        console.log('next',nextNavigation);
        navigate(nextNavigation, {
          replace: true,
        });
      };

    return {goBack, goNext}
}

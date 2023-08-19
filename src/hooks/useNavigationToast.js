import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useNavigationToast = ({navigateTo='', textDescription='', textButton='', style = {}}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(navigateTo, {
          replace: true,
        });
      };

    const createToast = () => {
        toast(textDescription, {
            action: {
              label: textButton,
              onClick: () => goBack()
            },
            style: style,
            duration: 3000,
          });
    }

    return {createToast}
}


// style warning example:
// {
//     background: '#fdfcec',
//     borderColor: '#fdf9d3',
//     color: '#8a7c00'
//   }

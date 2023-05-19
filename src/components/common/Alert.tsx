import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CustomAlert = withReactContent(Swal);

CustomAlert.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `CustomAlert` is a subclass of `Swal` with all the same instance & static methods
    CustomAlert.showLoading();
  },
}).then(() => {
  return CustomAlert.fire(<p>Shorthand works too</p>);
});

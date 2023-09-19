import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
	methods: {
		toastMsg(msg) {
			toast.warn(msg, {
				autoClose: 900,
				position: toast.POSITION.BOTTOM_CENTER
			}); // ToastOptions
		},

		// toast.success("Success Notification !", {
		// 	position: toast.POSITION.TOP_CENTER,
		// });
	}
}
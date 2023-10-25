import del from "del";
export const reset = () => {
	return del(app.path.clean);
}
// import del from 'delete';
// export const reset = () => {
// 	return del(app.path.clean);
// }

// import {deleteAsync} from "del"
// export const reset = () => {
//     return deleteAsync(app.path.clean)
// }
// import {deleteAsync as del } from "del"
// export const reset = () => {
//     return del(app.path.clean)
// }
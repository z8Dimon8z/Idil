import del from "del"; // Удаление папок
export const reset = () => {
	return del(app.path.clean);
}
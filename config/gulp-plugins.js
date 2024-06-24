// Импортируем модули
import notify from "gulp-notify";
import newer from "gulp-newer"; // проверка файлов если есть то с ним нечего не делает
import plumber from "gulp-plumber"; // при возникновении ощибки сообщение в терминале
import ifPlugin from "gulp-if";
import prettier from "gulp-prettier";
import rename from 'gulp-rename'; // перминовка файлов

// Экспортируем объект
export const plugins = {
	notify,
	if: ifPlugin,
	prettier,
	newer,
	plumber,
	rename
}
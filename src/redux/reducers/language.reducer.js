import { LANGUAGE_SUCCESS } from '@constants';
import es from '@locales/es/messages.json';
// import { RoutesList, RenderList } from '@routes';

const initialState = {
    language: 'es',
    catalogs: { es },
    routesList: '',//RoutesList('es'),
    renderList: '', //RenderList('es'),
};

export const language = (state = initialState, action = {}) => {
    console.log("HOLA")
    switch (action.type) {
        case LANGUAGE_SUCCESS:
            const { language, catalog } = action.payload;
            return {
                ...state,
                language: language,
                catalogs: { [language]: catalog },
                routesList: RoutesList(language),
                renderList: RenderList(language),
            };

        default:
            return state;
    }
};

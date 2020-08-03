import {
  SET_DRAW,
  SET_USER,
  SET_SALESPEOPLE,
  SET_DASHBOARD,
  SET_CLIENT_SEARCH,
  HANDLE_SEARCH_LOADING,
  HANDLE_LOADING,
} from './constants';

const defaultState = {
  loading: false,
  salespeople: [],
  search: {
    cpf: '',
    totalTitulos: '',
    searchLoading: false,
  },
  usuario: {
    id: null,
    nome: '',
    login: '',
    email: '',
    perfil: '',
    idLoja: null,
    ativo: false,
  },
  sorteio: {
    id: null,
    nome: '',
    descricao: '',
    status: '',
    dtSorteio: '',
    dtInicioEdicao: '',
    dtFimEdicao: '',
    vlTitulo: 0,
    vlMinimoCompra: 0,
    vlMaximoCompra: 0,
    numTituloDe: 0,
    numTituloAte: 0,
  },
  dashboard: {
    edicao: { nome: '', valorVendedor: 0, titulos: 0 },
    edicaoDiaria: { nome: '', valorVendedor: 0, titulos: 0 },
    diariaVendedor: { nome: '', valorVendedor: 0, titulos: 0 },
    edicaoVendedor: { nome: '', valorVendedor: 0, titulos: 0 },
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_DRAW: {
      return {
        ...state,
        sorteio: action.payload.data,
      };
    }
    case SET_USER: {
      return {
        ...state,
        usuario: action.payload.data,
      };
    }
    case SET_SALESPEOPLE: {
      return {
        ...state,
        salespeople: action.payload.data,
      };
    }
    case SET_DASHBOARD: {
      return {
        ...state,
        dashboard: action.payload.data,
      };
    }
    case SET_CLIENT_SEARCH: {
      return {
        ...state,
        search: action.payload.data,
      };
    }
    case HANDLE_SEARCH_LOADING: {
      return {
        ...state,
        search: {
          ...state.search,
          searchLoading: action.payload.status,
        },
      };
    }
    case HANDLE_LOADING: {
      return {
        ...state,
        loading: action.payload.status,
      };
    }
    default:
      return state;
  }
};

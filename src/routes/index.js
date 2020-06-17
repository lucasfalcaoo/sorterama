import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { setAPI } from '../services';
import LayoutRoute from '../components/LayoutRoute/components';
import {
  Login,
  Dashboard,
  InitialRegistration,
  PasswordRecovery,
  PasswordReset,
  Profile,
  CashFlow,
  Transactions,
  ProvisionalReceipt,
  OperationalHistory,
  SessionsRegistration,
  ActivitiesRegistration,
  Reservations,
  Services,
  EmployeesRegistration,
  EmployeesList,
  PriceTable,
  Cards,
  BusinessInfo,
  ClientList,
  ClientInvoices,
  ClientRegistration,
  ClientSelection,
  Accounts,
  BasicConfig,
  Categories,
  CostCenters,
  PaymentMethods,
  ReservationsConfig,
  ProvisionalReceiptConfig,
  PageNotFound,
} from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

setAPI();

const Routes = () => (
  <Router>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      style={{ zIndex: 1999 }}
    />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/esqueci-a-senha" component={PasswordRecovery} />
      <Route
        exact
        path="/resetar-senha/:token/:email"
        component={PasswordReset}
      />
      <Route path="/cadastro-inicial" component={InitialRegistration} />
      <LayoutRoute showTimeRange path="/visao-geral" component={Dashboard} />
      <LayoutRoute
        hideEstablishments
        path="/perfil"
        name="Perfil"
        component={Profile}
      />
      <LayoutRoute
        singleEstablishment
        path="/fluxo-de-caixa"
        name="Fluxo de Caixa"
        component={CashFlow}
      />
      <LayoutRoute
        showDate
        singleEstablishment
        enableSelectFutureDates
        path="/transacoes"
        name="Transações"
        component={Transactions}
      />
      <LayoutRoute
        showDate
        name="Notas fiscais"
        path="/notas-fiscais"
        component={ProvisionalReceipt}
      />
      <LayoutRoute
        showDate
        path="/historico-operacional"
        name="Histórico operacional"
        component={OperationalHistory}
      />
      <LayoutRoute
        path="/registro-de-sessoes"
        name="Registro de sessões"
        component={SessionsRegistration}
      />
      <LayoutRoute
        showDate
        path="/registro-de-atividades"
        name="Registro de atividades"
        component={ActivitiesRegistration}
      />
      <LayoutRoute
        showDate
        enableSelectFutureDates
        path="/reserva-de-vagas"
        name="Reserva de vagas"
        component={Reservations}
      />
      <LayoutRoute
        singleEstablishment
        name="Estabelecimento"
        path="/estabelecimento"
        component={BusinessInfo}
      />
      <LayoutRoute
        hideEstablishments
        name="Cadastrar estabelecimento"
        path="/novo-estabelecimento"
        previousPaths={[
          { name: 'Detalhes do estabelecimento', path: '/estabelecimento' },
        ]}
        component={BusinessInfo}
      />
      <LayoutRoute
        singleEstablishment
        name="Tabelas de preço"
        path="/tabelas-de-preco"
        component={PriceTable}
      />
      <LayoutRoute
        singleEstablishment
        name="Serviços"
        path="/servicos"
        component={Services}
      />
      <LayoutRoute
        name="Funcionários"
        path="/funcionarios"
        component={EmployeesList}
      />
      <LayoutRoute
        hideEstablishments
        name="Cadastrar funcionário"
        path="/novo-funcionario"
        previousPaths={[
          { name: 'Lista de funcionários', path: '/funcionarios' },
        ]}
        component={EmployeesRegistration}
      />
      <LayoutRoute
        hideEstablishments
        name="Editar funcionário"
        path="/editar-funcionario"
        previousPaths={[
          { name: 'Lista de funcionários', path: '/funcionarios' },
        ]}
        component={EmployeesRegistration}
      />
      <LayoutRoute
        singleEstablishment
        name="Cartões"
        path="/cartoes"
        component={Cards}
      />
      <LayoutRoute name="Clientes" path="/clientes" component={ClientList} />
      <LayoutRoute
        exact
        singleEstablishment
        name="Seleção de cliente"
        path="/tipos-de-cliente"
        component={ClientSelection}
      />
      <LayoutRoute
        hideEstablishments
        showEstablishmentName
        name="Cadastro de cliente"
        path="/cadastro-de-cliente"
        previousPaths={[{ name: 'Lista de clientes', path: '/clientes' }]}
        component={ClientRegistration}
      />
      <LayoutRoute
        hideEstablishments
        showEstablishmentName
        name="Faturas"
        path="/faturas"
        previousPaths={[{ name: 'Lista de clientes', path: '/clientes' }]}
        component={ClientInvoices}
      />
      <LayoutRoute
        singleEstablishment
        name="Configurações básicas"
        path="/configuracoes-basicas"
        component={BasicConfig}
      />
      <LayoutRoute
        singleEstablishment
        name="Contas"
        path="/contas"
        component={Accounts}
      />
      <LayoutRoute
        singleEstablishment
        name="Meios de pagamento"
        path="/meios-de-pagamento"
        component={PaymentMethods}
      />
      <LayoutRoute
        singleEstablishment
        name="Categorias"
        path="/categorias"
        component={Categories}
      />
      <LayoutRoute
        singleEstablishment
        name="Centros de Custo"
        path="/centros-de-custo"
        component={CostCenters}
      />
      <LayoutRoute
        singleEstablishment
        name="Notas fiscais"
        path="/configuracoes-de-notas-fiscais"
        previousPaths={[
          { name: 'Lista de notas fiscais', path: '/notas-fiscais' },
        ]}
        component={ProvisionalReceiptConfig}
      />
      <LayoutRoute
        singleEstablishment
        name="Configurações de reserva"
        path="/configuracoes-de-reserva"
        component={ReservationsConfig}
      />
      <LayoutRoute
        hideEstablishments
        path="*"
        name="Página não encontrada"
        component={PageNotFound}
      />
      <Redirect to="/pagina-nao-encontrada" />
    </Switch>
  </Router>
);

export default Routes;

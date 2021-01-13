import React from "react";
import {Provider} from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store from "./redux/store";
import {Container, Row, Col} from "reactstrap";

import AddUser from "./components/AddUser";
import SearchUser from "./components/SearchUser";
import SearchAirports from "./components/SearchAirports";

function App() {
	return (
    <Provider store={store}>
      <Container className="p-3">
        <div className="py-5 text-center">
          <h1>Alfa Developer Interview</h1>
          <p className="lead">
            Consumindo dados do serviço <span>OData</span>
          </p>
        </div>
        <Row>
          <Col>
            <AddUser />
          </Col>
           <Col className="col-8">
            <SearchUser />
            <hr />
            <SearchAirports /> 
          </Col>
        </Row>
      </Container>
      {/* Toaster */}
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </Provider>
	);
}

export default App;

class JeemaCoder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        prenomInput: '',
        nomInput: '',
        emailInput: '',
        telephoneInput: '',
        coders: [],
        ModiferIndex : null
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick () {    
         const newCoder ={
         prenom : this.state.prenomInput,
         nom : this.state.nomInput,
          email : this.state.emailInput,
          telephone : this.state.telephoneInput
      }
      // Ajouter un nouveau codeur 
      this.setState({coders : [newCoder, ...this.state.coders]})
      this.setState({
        // vider le formulaire
        prenomInput: '',
        nomInput: '',
        emailInput: '',
        telephoneInput: '',
        
      })
    }

    handleEdit(index) {
      const coder = this.state.coders[index]
      this.setState({
        prenomInput: coder.prenom,
        nomInput: coder.nom,
        emailInput: coder.email,
        telephoneInput: coder.telephone,
        })
    }
    render(){
      return (
        <div className="py-4">
          <p className="text-center">Jeemacoder gestion utilisateur</p>
          <h1>{this.state.nomInput}</h1>
          <div className="container">
            <div style={{ maxWidth: 600, margin: 'auto' }}>
              <div className="row">
                <div className="col-6 p-1">
                  <label className="form-label">Prenom </label>
                  <input
                    type="text"
                     value={this.state.prenomInput}
                    onChange={(e) => {
                      this.setState({ prenomInput: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
                    <div className="col-6 p-1">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    value={this.state.nomInput}
                    onChange={(e) => {
                      this.setState({ nomInput: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
              </div>
  
              <div className="row">
                <div className="col-6 p-1">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    value={this.state.emailInput}
                    onChange={(e) => {
                      this.setState({ emailInput: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
  
                <div className="col-6 p-1">
                  <label className="form-label">Telephone</label>
                  <input
                    type="text"
                    value={this.state.telephoneInput}
                    onChange={(e) => {
                      this.setState({ telephoneInput: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
              </div>
  
              <button
                onClick={this.handleClick}
                type="btnSubmit"
                className="btn btn-success w-100 mt-3"
              >
                Submit
              </button>
            </div>
          </div>
              
              <div className="mt-5 container">
              <h3 className="text-center"> Coder</h3>
              <table class="table">
    <thead>
      <tr>
        <th scope="col">Prenom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Telephone</th>
  
      </tr>
    </thead>
    <tbody>
      {
        this.state.coders.map((coder, index) =>{
          return <tr>
          <td>{coder.prenom}</td>
          <td>{coder.nom}</td>
          <td>{coder.email}</td>
          <td>{coder.telephone}</td>
          <button className= " btn btn-warning" 
                      onClick={ () => this.handleEdit(index )}
                      >
                      Modifier
                    </button>
        </tr>
        })
      }
    </tbody>
        </table>
            </div>    
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<JeemaCoder/>);
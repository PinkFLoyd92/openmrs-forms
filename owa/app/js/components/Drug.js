import React, { Component } from "react"
import IconButton from "material-ui/IconButton"
import Dialog from "material-ui/Dialog"
import TextField from "material-ui/TextField"
import FlatButton from "material-ui/FlatButton"
import { drugs } from "../resources"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table"

class Drug extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      openDelete: false,
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
    this.handleCloseDelete = this.handleCloseDelete.bind(this)
  }

  componentWillMount() {
    for (const d in drugs) {
      this.props.addDrug(parseInt(drugs[d].id), drugs[d].nombre, drugs[d].tipo, drugs[d].precios_fecha, drugs[d].codigo)
    }
  }

  handleEdit(evt) {
    const id = evt.target.getAttribute("data-key")
    const drug = this.props.drugs.filter(d => parseInt(d.id) === parseInt(id))[0]
    if (drug) {
      this.props.selectDrug(drug.id, drug.nombre, drug.tipo, drug.precios_fecha, drug.codigo)
      this.setState({ modalOpen: true })
    } else {
      console.error("DRUG NOT FOUND IN DATABASE")
    }
  }

  handleDelete(evt) {
    const id = evt.target.getAttribute("data-key")
    const drug = this.props.drugs.filter(d => parseInt(d.id) === parseInt(id))[0]
    console.info("A ELIMINAR: ", drug)
    if (drug) {
      this.props.selectDrug(drug.id, drug.nombre, drug.tipo, drug.precios_fecha, drug.codigo)
      this.setState({ openDelete: true })
    } else {
      console.error("DRUG NOT FOUND IN DATABASE")
    }
  }

  handleModalClose(evt) {
    this.setState({ modalOpen: false })
    this.props.selectDrug(null, null, null, null, null)
  }

  handleCloseDelete(evt) {
    this.setState({ openDelete: false })
    this.props.selectDrug(null, null, null, null, null)
  }

  handleSubmitDelete(evt) {
    const id = this.props.drugSelected.id
      // console.info("HERE WE DELETE THE DRUG")
    this.props.deleteDrug(this.props.drugs, id)
    this.props.selectDrug(null, null, null, null, null)
    this.setState({ openDelete: false })
  }
  render() {
    // console.log(this.props)
    const tbDrugs = this.props.drugs.map(obj => (
      <TableRow key={obj.id}>
        <TableRowColumn>
          {obj.codigo}
        </TableRowColumn>
        <TableRowColumn>
          {obj.nombre}
        </TableRowColumn>
        <TableRowColumn>
          {obj.tipo}
        </TableRowColumn>
        <TableRowColumn>
          { obj.precios_fecha ? obj.precios_fecha[0].precio : "NOT DEFINED"}
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            iconClassName="material-icons"
            tooltip="Editar"
            data-key={obj.id}
            onTouchTap={this.handleEdit}
          >
      build
    </IconButton>
        </TableRowColumn>
        <TableRowColumn>
          <IconButton
            iconClassName="material-icons"
            tooltip="Eliminar"
            data-key={obj.id}
            onTouchTap={this.handleDelete}
          >
     delete
    </IconButton>
        </TableRowColumn>

      </TableRow>

  ))
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleModalClose}
      />,
      <FlatButton
        label="Submit"
        primary
        onTouchTap={this.handleSubmitAdd}
      />,
    ]

    const alertActions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleCloseDelete}
      />,
      <FlatButton
        label="Eliminar"
        secondary
        onTouchTap={this.handleSubmitDelete}
      />,
    ]
    return (
      <div>
        <Table selectable={false} >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow selectable={false}>
              <TableHeaderColumn>CODIGO</TableHeaderColumn>
              <TableHeaderColumn>NOMBRE</TableHeaderColumn>
              <TableHeaderColumn>TIPO</TableHeaderColumn>
              <TableHeaderColumn>PRECIO</TableHeaderColumn>
              <TableHeaderColumn />
              <TableHeaderColumn />
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tbDrugs}
          </TableBody>
        </Table>
        <Dialog
          title="Edición de Medicamento"
          actions={actions}
          modal
          open={this.state.modalOpen}
        >
          <TextField
            value={this.props.drugSelected.nombre}
            floatingLabelText="NOMBRE"
            disabled
          /><br />
          <TextField
            value={this.props.drugSelected.codigo}
            floatingLabelText="CODIGO"
            disabled
          />
          <TextField
            defaultValue={this.props.drugSelected.tipo}
            floatingLabelText="TIPO"
          /><br />
          <TextField
            defaultValue={this.props.drugSelected.precios_fecha ? this.props.drugSelected.precios_fecha[0].precio : "NO DEFINIDO"}
            floatingLabelText="PRECIO"
          /><br />
        </Dialog>
        <Dialog
          actions={alertActions}
          modal={false}
          open={this.state.openDelete}
          onRequestClose={this.handleClose}
        >
            Eliminar medicamento {this.props.drugSelected.nombre}?
        </Dialog>
      </div>
    )
  }
}

export default Drug

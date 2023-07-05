import { DataGrid } from "devextreme-react";
import Button from "../components/Button";
import { useState} from 'react';
import { Card } from "../components/Card";
import { MainFrame } from "../components/MainFrame";
import SelectInput from "../components/SelectInput";
import TextInput from "../components/TextInput";
import { Column, Selection } from "devextreme-react/data-grid";
import { Modal } from "antd";


export function Home() {
    const options_secretaria = [
        {
            id: 0, text: '.: Selecione uma secretaria :.'
        },
        {
            id: 1, text: 'aaaaaaa'
        },
        {
            id: 2, text: 'bbbbbbb'
        },
        {
            id: 3, text: 'ccccccc'
        },
        {
            id: 4, text: 'ddddddd'
        }
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [idRow, setIdRow] = useState();

    const dadosTabela = [
        {
            aa: 'aaaaaaaaa',
            bb: 'bbbbbbbbb',
            cc: 'aaaaaaaaa',
            dd: 'aaaaaaaaa',
        },
        {
            aa: 'aaaaa25435aaaa',
            bb: '345345',
            cc: 'aaaaretrtaaaaa',
            dd: 'er',
        },
        {
            aa: 'sdfsdfg',
            bb: '345gdsh345',
            cc: 'aaaahghwrhretrtaaaaa',
            dd: 'ergregg',
        },
    ]

    function onSelectionChanged({selectedRowsData}:any) {
        const data = selectedRowsData[0];
        if(data !== null) {
            setModalIsOpen(true);
            console.log(data);
            setIdRow(data.aa);
        }
    }
    
    return (
        <MainFrame>

            <Modal open={modalIsOpen} onCancel={() => {setModalIsOpen(false)}} footer={null} centered title={'Cadastro de Pessoa'} style={{width: '60vw', height: '90vh'}}>
                <p>
                    {idRow}
                </p>
            </Modal>

            <Card>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <label htmlFor="">Buscar CPF</label>
                            <SelectInput placeholder="" options={options_secretaria} />
                        </div>
                        <div className="col-md-4 form-group">
                            <label htmlFor="">CPF</label>
                            <TextInput placeholder="Buscar por CPF..." />
                        </div>
                        <div className="col-md-4 form-group">
                            <Button>Buscar</Button>
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="card-body">
                    <DataGrid
                        dataSource={dadosTabela}
                        onSelectionChanged={onSelectionChanged}
                        hoverStateEnabled
                        
                    >
                        <Selection mode="single"/>
                        <Column caption="ID" dataField="aa" />
                        <Column caption="NOME" dataField="bb" />
                        <Column caption="CNPJ" dataField="cc" />
                        <Column caption="TELEFONE" dataField="dd" />
                    </DataGrid>
                </div>
            </Card>
        </MainFrame>
    );
}
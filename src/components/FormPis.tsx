import React, { useState } from 'react';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';

interface FormInterface {
    name: string;
    email: string;
    message: string;
}

export function FormPis() {
    const [formState, setFormState] = useState<FormInterface>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="d-flex justify-content-end mb-4">
                <b className='text-success' >MATRÍCULA: 9-8517745444</b>
            </div>

            <div className="row">
                <div className='col-md-8 form-group'>
                    <label htmlFor="name">Nome</label>
                    <TextInput placeholder='nome do funcionário' />
                </div>
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">Cargo</label>
                    <TextInput placeholder='cargo do funcionário' />
                </div>
            </div>

            <div className="row">
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">PIS</label>
                    <TextInput placeholder='xxx.xx xxx.xx-x' />
                </div>
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">CPF</label>
                    <TextInput placeholder='xxx.xxx.xxx-xx' />
                </div>
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">RG</label>
                    <TextInput placeholder='xxx.xxx.xxx' />
                </div>
            </div>

            <div className="row">
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">Admissão</label>
                    <TextInput type='date' />
                </div>
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">Rescisão</label>
                    <TextInput type='date' />
                </div>
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">Status</label>
                    <TextInput />
                </div>
            </div>

            <div className="row">
                <div className='col-md-4 form-group'>
                    <label htmlFor="name">Função</label>
                    <TextInput placeholder='descrição da função' />
                </div>
                <div className='col-md-8 form-group'>
                    <label htmlFor="name">Horário</label>
                    <TextInput placeholder='horários' />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 form-group">
                    <label htmlFor="name">Observação</label>
                    <TextAreaInput />
                </div>
                                </div>

        </form>
    );
};

import React from 'react'

const Materia = ({title, text}) => {
    return (
        <section id="materia">
            <div className="materias container">
                <div className="materia-top">
                    <h1 className="materia-title">{title}</h1>
                    <p>
                        {text}</p>
                </div>
                <div className="materia-bottom">
                    <Materiaitem text="Example text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum purus vehicula metus dapibus tristique. " title="Matéria Exemplo" materia="https://google.com" />
                    <Materiaitem text="Example text: Donec ornare nisi at efficitur vehicula. Morbi pharetra purus justo molestie." title="Examplo de Matéria" />
                    <Materiaitem text="Example text: Vestibulum at dui bibendum, rutrum tellus eget, feugiat quam. Nam ac porttitor velit." title="Título da Matéria" />
                    <Materiaitem text="Example text: Mauris eu orci ullamcorper, commodo dolor non, facilisis ligula. " title="Example title" />
                </div>
            </div>
        </section>
    )
}

const Materiaitem = ({ text, title, materia }) => {

    return (
        <div className="materia-item" id="materia">
            <a href={materia}><h2>{title}</h2></a>
            <p>{text}</p>
        </div>
    )
}

export default Materia
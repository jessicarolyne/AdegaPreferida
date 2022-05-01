import React from 'react';
import {ImageBackground, Text} from 'react-native';

import estilos from './estilos';
import capa from '../../assets/images/capa.jpg'

export default function TelaInicial(){
    return(
        <ImageBackground
            blurRadius={10}
            style={estilos.container}
            source={capa}
        >
            <Text style={estilos.titulo}>Adega Preferida</Text>
            <Text style={estilos.subtitulo}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}
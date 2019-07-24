import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

var localStyles = StyleSheet.create({
    viroContainer: {
        flex: 1,
        backgroundColor: "black",
    },
    outer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "black",
    },
    inner: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "black",
    },
    titleText: {
        paddingTop: 30,
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        fontSize: 25
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    },
    buttons: {
        height: 80,
        width: 150,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    exitButton: {
        height: 50,
        width: 100,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});

class ScoresList extends Component {
    state = {
        scores: []
    }

    async componentDidMount() {
        const scores = await this.loadData();
        this.setState({
            scores: scores
        })
        console.log('yeahhh scores', scores)
    }

    loadData = async () => {
        const url = `http://localhost:3000/v1/all`;
        const response = await fetch(url);
        const data = response.json();
        console.log('data', data)
        return data;
    }

    render() {
        const { scores } = this.state;
        console.log('scores', scores)
        return (
            <View style={localStyles.outer} >
            <Text style={localStyles.titleText}>High Scoressss</Text>
            <FlatList 
                data={scores}
                renderItem={({ item, index }) => {
                    return (
                        <Text style={localStyles.titleText}>{item}</Text>
                    )
                }}
                keyExtractor={(item, index) => `${index}`}
            />
            </View>
        )
    }
}

export default ScoresList;
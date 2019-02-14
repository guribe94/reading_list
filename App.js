import React from 'react';
import { AsyncStorage, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import FAB from 'react-native-fab';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class App extends React.Component {

    render(){
	return(
	    <ReadingList />
	)
    }
}

export class ReadingList extends React.Component {

    constructor(props) {
	super(props);
	this.books = this.loadBooks();
	this.state = {
	    visible: false,
	    authorText: "",
	    titleText: ""
	}
    }

    onHostDestory(){

    }

    render() {
	return (
	    <View style={styles.container}>
		<FlatList
		    data={[
			{key: 'Devin'},
			{key: 'Jackson'},
			{key: 'James'},
		    ]}
		    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
		/>
		<Dialog
		    visible={this.state.visible}
		    onTouchOutside={() => {
			this.setState({ visible: false });
		    }}
		>
		    <DialogContent>
			<View style={styles.addBookDialog}>
			    <Text>Title:</Text>
			    <TextInput
				onChangeText={(text) => this.setState({'titleText': text})}
				value={this.state.titleText}
			    />
			    <Text>Author:</Text>
			    <TextInput
				onChangeText={(text) => this.setState({'authorText': text})}
				value={this.state.authorText}
			    />
			    <Button
				title="Show Dialog - Slide Animation"
				onPress={() => {}}
			    />
		    </View>
		</DialogContent>
	    </Dialog>
	    <FAB buttonColor="purple" iconTextColor="#FFFFFF" onClickAction={() => {this.setState({ visible: true});}} visible={true} />

	</View>
	);
    }

    renderRow(item){
	return(<ListRow title={item.title} author={item.author} />);
    }

    addBook(){
	console.log("FAB pressed");

    }

    loadBooks(){
    }

    storeBooks(){
    }
}

class ListRow extends React.Component{

    render(){
	return(
	    <View style={styles.listRow}>
		<Text>Cover</Text>
		<Text>Title</Text>
		<Text>Author</Text>
	    </View>
	) 
    }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
	paddingVertical: 50,
    },
    addBookDialog: {
	//alignItems: 'center',
	justifyContent: 'center',
	paddingLeft: 25,
	paddingRight: 25,
	// backgroundColor: '#000',
	// opacity: 0.4,
    }
});

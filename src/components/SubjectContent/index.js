import { View, StyleSheet, Text  } from "react-native"
import React, {useState} from 'react';
import ExpandButton from "../ExpandButton";
import { RFPercentage } from "react-native-responsive-fontsize";

export function SubjectContent() {
    const [expanded, setExpanded] = useState(0)

    const ChangeExpanded = (number) => {
        setExpanded(number)
    }

    return(
        <View>
            {expanded == 0 &&(
                <View style={styles.button0}>
                    <ExpandButton title={'Tarefas'} open={false} pressed={() => ChangeExpanded(1)}/>
                    <ExpandButton title={'Observações'} open={false} pressed={() => ChangeExpanded(2)}/>
                    <ExpandButton title={'Links'} open={false} pressed={() => ChangeExpanded(3)}/>
                    <ExpandButton title={'Provas'} open={false} pressed={() => ChangeExpanded(4)}/>
                </View>
            )}
            {expanded == 1 &&(
                <View style={styles.buttons}>
                    <ExpandButton title={'Tarefas'} open={true} pressed={() => ChangeExpanded(0)}/>
                    <View>
                        
                    </View>
                    <ExpandButton title={'Observações'} open={false} pressed={() => ChangeExpanded(2)}/>
                    <ExpandButton title={'Links'} open={false} pressed={() => ChangeExpanded(3)}/>
                    <ExpandButton title={'Provas'} open={false} pressed={() => ChangeExpanded(4)}/>
                </View>
            )}
            {expanded == 2 &&(
                <View style={styles.buttons}>
                    <ExpandButton title={'Tarefas'} open={false} pressed={() => ChangeExpanded(1)}/>
                    <ExpandButton title={'Observações'} open={true} pressed={() => ChangeExpanded(0)}/>
                    <View>
                        
                    </View>
                    <ExpandButton title={'Links'} open={false} pressed={() => ChangeExpanded(3)}/>
                    <ExpandButton title={'Provas'} open={false} pressed={() => ChangeExpanded(4)}/>
                </View>
            )}
            {expanded == 3 &&(
                <View style={styles.buttons}>
                    <ExpandButton title={'Tarefas'} open={false} pressed={() => ChangeExpanded(1)}/>
                    <ExpandButton title={'Observações'} open={false} pressed={() => ChangeExpanded(2)}/>
                    <ExpandButton title={'Links'} open={true} pressed={() => ChangeExpanded(0)}/>
                    <View>
                        
                    </View>
                    <ExpandButton title={'Provas'} open={false} pressed={() => ChangeExpanded(4)}/>
                </View>
            )}
            {expanded == 4 &&(
                <View style={styles.buttons}>
                    <ExpandButton title={'Tarefas'} open={false} pressed={() => ChangeExpanded(1)}/>
                    <ExpandButton title={'Observações'} open={false} pressed={() => ChangeExpanded(2)}/>
                    <ExpandButton title={'Links'} open={false} pressed={() => ChangeExpanded(3)}/>
                    <ExpandButton title={'Provas'} open={true} pressed={() => ChangeExpanded(0)}/>
                    <View>
                        
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button0:{
        height: RFPercentage(30),
    },
    buttons: {
        height: RFPercentage(30)
    }
})
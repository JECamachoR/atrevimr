import API from "@aws-amplify/api"
import { graphqlOperation } from "@aws-amplify/api-graphql"
import * as React from "react"
import { GestureResponderEvent, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { UnsplashPhoto } from "react-native-unsplash"
import createValidation from "yup/lib/util/createValidation"
import { Goal } from "../../API"
import { updateGoal } from "../../graphql/mutations"
import GoalForm from "./GoalForm"
import GoalTitle from "./GoalTitle"

interface GoalCardProps {
    goal: Goal;
    onPress?: (e: GestureResponderEvent) => void;
    key?: number;
}

const GoalCard = ({ goal , onPress }: GoalCardProps): React.ReactElement => {

	const [visible, setVisible] = React.useState(false)

	const photo: UnsplashPhoto["urls"] = JSON.parse(goal.unsplashIMG || "")

    return (
		<TouchableOpacity
			onPress={(e) => {
				setVisible(true)
				if (onPress) onPress(e)
			}}
			style={styles.container}
		>

			<GoalForm
				goal={{...goal, date: new Date(goal.date), unsplashIMG: JSON.parse(goal.unsplashIMG || "{}")}} 
				visible={visible}
				hideModal={() => setVisible(false)} 
                handleSubmit={async ({createdAt, updatedAt, PremadeGoal, premadeGoalID, ...goal}: Goal) => {
                    const date = typeof goal.date !== "string" ? goal.date : new Date(goal.date)
                    try {
                        await API.graphql(graphqlOperation(
                            updateGoal,
                            {input: {
                                ...goal,
                                date: date?.toISOString().split("T")[0],
                                unsplashIMG: JSON.stringify(goal.unsplashIMG)
                            }}
                        ))
                        setVisible(false)
                    } catch( er ) {
                        console.error(er)
                    }
                }}
                type="update"
			/>

			<View style={styles.card}>
				<ImageBackground source={{uri: photo.regular}} style={{flex: 1}}>
					<View style={styles.metaHead}></View>
					<GoalTitle goal={goal} />
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

export default GoalCard

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 16,
		marginVertical:8,
		borderRadius: 16,
	},
	card: {
		height: 184,
		flex: 1,
		borderRadius: 16,
		overflow: "hidden"
	},
	metaHead: {
		height: 92,
		borderRadius: 16,
		padding: 16,
	},
})

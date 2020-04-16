import workoutAbs from '../common/images/workoutAbs.png';
import workoutLegs from '../common/images/workoutLegs.png';
import workoutChest from '../common/images/workoutChest.png';
import workoutShoulders from '../common/images/workoutShoulders.png';
import workoutCalisthenics from '../common/images/workoutCalisthenics.png';
import workoutArms from '../common/images/workoutArms.png';


//This function holds some data for the mock workouts we have currently

export default function WorkoutsData() {
      
    return [{    
        workoutName: "Killer Core & Abs",
        description: "",
        id: "CoreAbs",
        image: workoutAbs,
        workoutAlt: "workout core abs"
        },
        {    
        workoutName: "Legs & cardio",
        description: "",
        id: "LegsCardio",
        image: workoutLegs,
        workoutAlt: "workout legs cardio"
        },
        {    
        workoutName: "Chest Day!",
        description: "",
        id: "ChestDay",
        image: workoutChest,
        workoutAlt: "workout chest"
        },
        {    
        workoutName: "Shoulders challenge",
        description: "",
        id: "ShouldersChallenge",
        image: workoutShoulders,
        workoutAlt: "workout shoulders"
        },
        {    
        workoutName: "Calisthenics",
        description: "",
        id: "Calisthenics",
        image: workoutCalisthenics,
        workoutAlt: "workout calisthenics"
        },
        {    
        workoutName: "Biceps & Triceps",
        description: "",
        id: "BicepsTriceps",
        image: workoutArms,
        workoutAlt: "workout biceps triceps"
        },
    ];
 }

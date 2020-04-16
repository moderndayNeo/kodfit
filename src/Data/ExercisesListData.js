import listChest from '../common/images/listChest.png';
import listBack from '../common/images/listBack.png';
import listLegs from '../common/images/listLegs.png';
import listShoulders from '../common/images/listShoulders.png';
import listArms from '../common/images/listArms.png';
import listCardio from '../common/images/listCardio.png';


//This function holds some data for the exercise lists we have currently

export default function ExercisesListData() {
      
    return [{    
        listName: "Chest",
        description: "",
        id: "Chest",
        image: listChest,
        listAlt: "Exercise list chest"
        },
        {    
        listName: "Back",
        description: "",
        id: "Back",
        image: listBack,
        listAlt: "Exercise list back"
        },
        {    
        listName: "Legs",
        description: "",
        id: "Legs",
        image: listLegs,
        listAlt: "Exercise list legs"
        },
        {    
        listName: "Shoulders",
        description: "",
        id: "Shoulders",
        image: listShoulders,
        listAlt: "Exercise list shoulders"
        },
        {    
        listName: "Arms",
        description: "",
        id: "Arms",
        image: listArms,
        listAlt: "Exercise list Arms"
        },
        {    
        listName: "Cardio",
        description: "",
        id: "Cardio",
        image: listCardio,
        listAlt: "Exercise list Cardio"
        },
        
    ];
 }

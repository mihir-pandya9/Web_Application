import axios from "axios";

const biceps = [
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/wide-grip-ez-bar-curl.gif",
    WorkOut: "Barbell Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Barbell Curl: Stand with feet shoulder-width apart, hold a barbell with an underhand grip and curl it towards your shoulders.",
    "Long Explanation":
      "This classic bicep-building exercise involves standing with feet shoulder-width apart, gripping a barbell with an underhand grip. With elbows close to the torso, curl the barbell towards the shoulders while keeping the upper arms stationary. This motion targets the bicep muscles, including both the long and short head, providing development in muscle mass and arm strength. The focus is on smooth, controlled movements, exhaling as you lift the barbell and inhaling on the return. For beginners, it's crucial to start with a lighter weight to perfect the form before progressing.",
    Video: "https://www.youtube.com/results?search_query=Barbell+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-bicep-curl.gif",
    WorkOut: "Dumbbell Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Dumbbell Curl: Curl dumbbells alternately or simultaneously while keeping your elbows close to your torso.",
    "Long Explanation":
      "The Dumbbell Curl is a weight training exercise targeting the Biceps. It involves using Dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Dumbbell+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/dumbbell-hammer-curl.gif",
    WorkOut: "Hammer Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Hammer Curl: Perform dumbbell curls with palms facing each other, targeting the brachialis muscle.",
    "Long Explanation":
      "The Hammer Curl is a weight training exercise targeting the Biceps. It involves using Dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hammer+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/ez-bar-preacher-curl.gif",
    WorkOut: "Preacher Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Preacher bench and barbell or dumbbell",
    Explaination:
      "Preacher Curl: Use a preacher bench to isolate biceps, keeping the upper arms stationary.",
    "Long Explanation":
      "The Preacher Curl is a weight training exercise targeting the Biceps. It involves using Preacher bench and barbell or dumbbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Preacher+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/04031301-Dumbbell-Seated-Revers-grip-Concentration-Curl_Forearms_360.gif",
    WorkOut: "Concentration Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Concentration Curl: Sit with a dumbbell in one hand, elbow on the thigh, and curl the weight focusing on the bicep.",
    "Long Explanation":
      "The Concentration Curl is a weight training exercise targeting the Biceps. It involves using Dumbbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Concentration+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2022/04/cable-curls.gif",
    WorkOut: "Cable Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with bar attachment",
    Explaination:
      "Cable Curl: Use a cable machine with a bar attachment, curling the bar towards your chest.",
    "Long Explanation":
      "The Cable Curl is a weight training exercise targeting the Biceps. It involves using Cable machine with bar attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Cable+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/04461301-EZ-Barbell-Close-grip-Curl_Upper-Arms_360.gif",
    WorkOut: "EZ-Bar Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "EZ-bar",
    Explaination:
      "EZ-Bar Curl: Curl an EZ-bar with both hands, which can be easier on your wrists.",
    "Long Explanation":
      "The EZ-Bar Curl is a weight training exercise targeting the Biceps. It involves using EZ-bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=EZ-Bar+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/incline-dumbbell-curl.gif",
    WorkOut: "Incline Dumbbell Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells and an incline bench",
    Explaination:
      "Incline Dumbbell Curl: Lie back on an incline bench, curl dumbbells with arms hanging down.",
    "Long Explanation":
      "The Incline Dumbbell Curl is a weight training exercise targeting the Biceps. It involves using Dumbbells and an incline bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Incline+Dumbbell+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/04511301-EZ-Barbell-Reverse-Grip-Curl_Forearms_360-1.gif",
    WorkOut: "Reverse Barbell Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Reverse Barbell Curl: Grip the barbell overhand and curl, targeting the forearms and biceps.",
    "Long Explanation":
      "The Reverse Barbell Curl is a weight training exercise targeting the Biceps. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Reverse+Barbell+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/dumbbell-seated-zottman-curl.gif",
    WorkOut: "Seated Alternating Dumbbell Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells and a bench",
    Explaination:
      "Seated Alternating Dumbbell Curl: Alternate curling dumbbells while seated, focusing on each bicep.",
    "Long Explanation":
      "The Seated Alternating Dumbbell Curl is a weight training exercise targeting the Biceps. It involves using Dumbbells and a bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Seated+Alternating+Dumbbell+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://i.pinimg.com/originals/4b/e4/68/4be46841032506b311d43b8d49c6a58a.gif",
    WorkOut: "Zottman Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Zottman Curl: Curl dumbbells up normally and rotate your wrists at the top to descend with an overhand grip.",
    "Long Explanation":
      "The Zottman Curl is a weight training exercise targeting the Biceps. It involves using Dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Zottman+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Biceps-Curl.gif",
    WorkOut: "Resistance Band Bicep Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Resistance band",
    Explaination:
      "Resistance Band Bicep Curl: Stand on a resistance band and curl your hands towards your shoulders.",
    "Long Explanation":
      "The Resistance Band Bicep Curl is a weight training exercise targeting the Biceps. It involves using Resistance band, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Resistance+Band+Bicep+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/pull-up.gif",
    WorkOut: "Chin-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Pull-up bar",
    Explaination:
      "Chin-Up: Grip a bar with palms facing you and pull yourself up, focusing on biceps.",
    "Long Explanation":
      "The Chin-Up is a weight training exercise targeting the Biceps. It involves using Pull-up bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Chin-Up",
  },
  {
    Muscles: "Biceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/02/bicep-curl-machine.gif",
    WorkOut: "Machine Bicep Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bicep curl machine",
    Explaination:
      "Machine Bicep Curl: Use a bicep curl machine, focusing on isolating the bicep muscle.",
    "Long Explanation":
      "The Machine Bicep Curl is a weight training exercise targeting the Biceps. It involves using Bicep curl machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Machine+Bicep+Curl",
  },
  {
    Muscles: "Biceps",
    img: "https://static1.squarespace.com/static/5e9f8e841520b34d121c63f2/6100b659f4d09d4ead11d54f/621ada7a4fa9355152d7ca0c/1709015689297/00721301-Barbell-Prone-Incline-Curl_Upper-Arms_720.gif?format=1500w",
    WorkOut: "Spider Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bench (preferably inclined) and barbell or dumbbells",
    Explaination:
      "Spider Curl: Lie face down on an incline bench and curl barbells, isolating biceps.",
    "Long Explanation":
      "The Spider Curl is a weight training exercise targeting the Biceps. It involves using Bench (preferably inclined) and barbell or dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Spider+Curl",
  },
];

//----------------------------------------------------->

const triceps = [
  {
    Muscles: "Triceps",
    img: "https://i.pinimg.com/originals/07/79/02/0779027b1e9e996e03ed5b728e329adc.gif",
    WorkOut: "Tricep Dips",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Parallel bars or a bench",
    Explaination:
      "Tricep Dips: Use parallel bars or a bench, lower your body by bending your arms, then push back up.",
    "Long Explanation":
      "The Tricep Dips is a weight training exercise targeting the Triceps. It involves using Parallel bars or a bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Tricep+Dips",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/00611301-Barbell-Lying-Triceps-Extension_Upper-Arms_360.gif",
    WorkOut: "Skull Crushers (Lying Tricep Extensions)",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell or dumbbells and a bench",
    Explaination:
      "Skull Crushers (Lying Tricep Extensions): Lie on a bench, extend arms with weight, lower it towards your forehead, then extend back up.",
    "Long Explanation":
      "The Skull Crushers (Lying Tricep Extensions) is a weight training exercise targeting the Triceps. It involves using Barbell or dumbbells and a bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Skull+Crushers",
  },
  {
    Muscles: "Triceps",
    img: "https://qph.cf2.quoracdn.net/main-qimg-8e34bb41d30ceb2f65aa7873a87a4371",
    WorkOut: "Close-Grip Bench Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell or dumbbells",
    Explaination:
      "Close-Grip Bench Press: Bench press with hands closer together, focusing on triceps more than chest.",
    "Long Explanation":
      "The Close-Grip Bench Press is a weight training exercise targeting the Triceps. It involves using Barbell or dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Close-Grip+Bench+Press",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/12/21881301-Dumbbell-Seated-Triceps-Extension_Upper-Arms_360.gif",
    WorkOut: "Overhead Tricep Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell or kettlebell",
    Explaination:
      "Overhead Tricep Extension: Stand or sit, extend a weight over your head, then bend and straighten your elbows.",
    "Long Explanation":
      "The Overhead Tricep Extension is a weight training exercise targeting the Triceps. It involves using Dumbbell or kettlebell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Overhead+Tricep+Extension",
  },
  {
    Muscles: "Triceps",
    img: "https://qph.cf2.quoracdn.net/main-qimg-a3d167f5339068b5f47575d86e7745bc",
    WorkOut: "Tricep Pushdown",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with bar attachment",
    Explaination:
      "Tricep Pushdown: On a cable machine, push the bar down until arms are extended, focusing on triceps.",
    "Long Explanation":
      "The Tricep Pushdown is a weight training exercise targeting the Triceps. It involves using Cable machine with bar attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Tricep+Pushdown",
  },
  {
    Muscles: "Triceps",
    img: "https://i.pinimg.com/originals/00/2f/9a/002f9a315be7db7b0f0a79ca81e1f5d5.gif",
    WorkOut: "Diamond Push-Ups",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Diamond Push-Ups: Place hands close together in a diamond shape, lower your body, and push up, targeting triceps.",
    "Long Explanation":
      "The Diamond Push-Ups is a weight training exercise targeting the Triceps. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Diamond+Push-Ups",
  },
  {
    Muscles: "Triceps",
    img: "https://i.pinimg.com/originals/e1/64/bf/e164bfe4db5977f639c427cf40871b56.gif",
    WorkOut: "Cable Overhead Tricep Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with rope attachment",
    Explaination:
      "Cable Overhead Tricep Extension: Face away from a cable machine, extend arms overhead, and bend/extend your elbows.",
    "Long Explanation":
      "The Cable Overhead Tricep Extension is a weight training exercise targeting the Triceps. It involves using Cable machine with rope attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Cable+Overhead+Tricep+Extension",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/17381301-Dumbbell-Seated-Reverse-Grip-One-Arm-Overhead-Tricep-Extension_Upper-Arms_360.gif",
    WorkOut: "Single-Arm Dumbbell Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Single-Arm Dumbbell Extension: Overhead extension using a dumbbell, performed one arm at a time for focused tricep work.",
    "Long Explanation":
      "The Single-Arm Dumbbell Extension is a weight training exercise targeting the Triceps. It involves using Dumbbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Extension",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/03331301-Dumbbell-Kickback_Upper-Arms_360.gif",
    WorkOut: "Kickbacks",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Kickbacks: Lean forward, move a dumbbell back until your arm is straight, focusing on the tricep.",
    "Long Explanation":
      "The Kickbacks is a weight training exercise targeting the Triceps. It involves using Dumbbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Kickbacks",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/02001301-Cable-Pushdown-with-rope-attachment_Upper-Arms_360.gif",
    WorkOut: "Rope Pushdown",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with rope attachment",
    Explaination:
      "Rope Pushdown: Using a rope attachment on a cable machine, push down, extending arms and then return.",
    "Long Explanation":
      "The Rope Pushdown is a weight training exercise targeting the Triceps. It involves using Cable machine with rope attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Rope+Pushdown",
  },
  {
    Muscles: "Triceps",
    img: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/dips-assis-machine-matrix.gif",
    WorkOut: "Tricep Machine Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Tricep press machine",
    Explaination:
      "Tricep Machine Press: Use a tricep press machine, push the weight down until arms are fully extended.",
    "Long Explanation":
      "The Tricep Machine Press is a weight training exercise targeting the Triceps. It involves using Tricep press machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Tricep+Machine+Press",
  },
  {
    Muscles: "Triceps",
    img: "https://newlife.com.cy/wp-content/uploads/2019/12/13991301-Bench-dip-on-floor_Upper-Arms_360.gif",
    WorkOut: "Bench Dips",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bench",
    Explaination:
      "Bench Dips: Using a bench or chair, lower your body by bending your arms and then push back up.",
    "Long Explanation":
      "The Bench Dips is a weight training exercise targeting the Triceps. It involves using Bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Bench+Dips",
  },
  {
    Muscles: "Triceps",
    img: "https://fitnessprogramer.com/wp-content/uploads/2020/05/Banded-Triceps-Extension.gif",
    WorkOut: "Resistance Band Tricep Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Resistance band",
    Explaination:
      "Resistance Band Tricep Extension: Use a resistance band, extend your arms down or overhead, focusing on triceps.",
    "Long Explanation":
      "The Resistance Band Tricep Extension is a weight training exercise targeting the Triceps. It involves using Resistance band, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Resistance+Band+Tricep+Extension",
  },
  {
    Muscles: "Triceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/tricep-overhead-extensions.gif",
    WorkOut: "Kettlebell Overhead Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Kettlebell",
    Explaination:
      "Kettlebell Overhead Extension: Hold a kettlebell with both hands, extend arms overhead, then bend and straighten elbows.",
    "Long Explanation":
      "The Kettlebell Overhead Extension is a weight training exercise targeting the Triceps. It involves using Kettlebell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Kettlebell+Overhead+Extension",
  },
  {
    Muscles: "Triceps",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/06/sphinx-push-up.gif",
    WorkOut: "Tricep Push-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Tricep Push-Up: Similar to a standard push-up but with hands closer to work the triceps more intensely.",
    "Long Explanation":
      "The Tricep Push-Up is a weight training exercise targeting the Triceps. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Tricep+Push-Up",
  },
];

//----------------------------------------------------->

const chest = [
  {
    Muscles: "Chest",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/barbell-pause-bench.gif",
    WorkOut: "Bench Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and bench",
    Explaination:
      "Bench Press: Lie on a bench, press a barbell up from your chest, then lower it back down.",
    "Long Explanation":
      "The Bench Press is a weight training exercise targeting the Chest. It involves using Barbell and bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Bench+Press",
  },
  {
    Muscles: "Chest",
    img: "https://homeworkouts.org/wp-content/uploads/anim-push-ups.gif",
    WorkOut: "Push-Ups",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Push-Ups: Keep your body straight and lower it to the ground by bending your arms, then push back up.",
    "Long Explanation":
      "The Push-Ups is a weight training exercise targeting the Chest. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Push-Ups",
  },
  {
    Muscles: "Chest",
    img: "https://i.pinimg.com/originals/a9/77/9c/a9779c83c9eaf4d81d0546b25fdfa83e.gif",
    WorkOut: "Incline Bench Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and incline bench",
    Explaination:
      "Incline Bench Press: Perform a bench press on an inclined bench to target the upper chest.",
    "Long Explanation":
      "The Incline Bench Press is a weight training exercise targeting the Chest. It involves using Barbell and incline bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Incline+Bench+Press",
  },
  {
    Muscles: "Chest",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/07/barbell-decline-bench-press.gif",
    WorkOut: "Decline Bench Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and decline bench",
    Explaination:
      "Decline Bench Press: Use a decline bench for bench pressing, focusing on the lower chest.",
    "Long Explanation":
      "The Decline Bench Press is a weight training exercise targeting the Chest. It involves using Barbell and decline bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Decline+Bench+Press",
  },
  {
    Muscles: "Chest",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/03081301-Dumbbell-Fly_Chest-FIX_360.gif",
    WorkOut: "Dumbbell Flyes",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells and a bench",
    Explaination:
      "Dumbbell Flyes: Lie on a bench, extend arms with dumbbells, and bring them together in an arc motion.",
    "Long Explanation":
      "The Dumbbell Flyes is a weight training exercise targeting the Chest. It involves using Dumbbells and a bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Dumbbell+Flyes",
  },
  {
    Muscles: "Chest",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif",
    WorkOut: "Cable Crossovers",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with pulley system",
    Explaination:
      "Cable Crossovers: Stand between two cable stations, pull handles together in front of you in a hugging motion.",
    "Long Explanation":
      "The Cable Crossovers is a weight training exercise targeting the Chest. It involves using Cable machine with pulley system, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Cable+Crossovers",
  },
  {
    Muscles: "Chest",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Chest-Press-Machine.gif",
    WorkOut: "Chest Press Machine",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Chest press machine",
    Explaination:
      "Chest Press Machine: Sit on the machine, push the bars or handles forward, then bring them back towards the chest.",
    "Long Explanation":
      "The Chest Press Machine is a weight training exercise targeting the Chest. It involves using Chest press machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Chest+Press+Machine",
  },
  {
    Muscles: "Chest",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/pec-deck.gif",
    WorkOut: "Pec Deck Machine",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Pec deck machine",
    Explaination:
      "Pec Deck Machine: Sit with arms on the pads and bring them together in front of you.",
    "Long Explanation":
      "The Pec Deck Machine is a weight training exercise targeting the Chest. It involves using Pec deck machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Pec+Deck+Machine",
  },
  {
    Muscles: "Chest",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/chest-dip-movement.gif",
    WorkOut: "Dips for Chest",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Parallel bars",
    Explaination:
      "Dips for Chest: Perform dips with a forward lean to emphasize the chest muscles.",
    "Long Explanation":
      "The Dips for Chest is a weight training exercise targeting the Chest. It involves using Parallel bars, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Dips+for+Chest",
  },
  {
    Muscles: "Chest",
    img: "https://www.docteur-fitness.com/wp-content/uploads/2022/04/svend-press.gif",
    WorkOut: "Svend Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Plates or dumbbells",
    Explaination:
      "Svend Press: Hold plates between your hands and press them together in front of your chest, then push forward.",
    "Long Explanation":
      "The Svend Press is a weight training exercise targeting the Chest. It involves using Plates or dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Svend+Press",
  },
  {
    Muscles: "Chest",
    img: "https://i.pinimg.com/originals/c3/ac/8f/c3ac8f4c1763262c1f3ac1ef3ea741ff.gif",
    WorkOut: "Single-Arm Dumbbell Bench Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell and bench",
    Explaination:
      "Single-Arm Dumbbell Bench Press: Lie on a bench and press a dumbbell with one arm, alternating sides.",
    "Long Explanation":
      "The Single-Arm Dumbbell Bench Press is a weight training exercise targeting the Chest. It involves using Dumbbell and bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Bench+Press",
  },
  {
    Muscles: "Chest",
    img: "https://liftingfaq.com/wp-content/uploads/2023/08/db-floor-press.gif",
    WorkOut: "Floor Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and bench",
    Explaination:
      "Floor Press: Similar to a bench press but performed lying on the floor, limiting the range of motion.",
    "Long Explanation":
      "The Floor Press is a weight training exercise targeting the Chest. It involves using Barbell and bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Floor+Press",
  },
  {
    Muscles: "Chest",
    img: "https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2023/03/plyometric-push-up.gif",
    WorkOut: "Plyometric Push-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Plyometric Push-Up: Explosive push-ups, where you push off the ground to lift your hands, then land back in a push-up.",
    "Long Explanation":
      "The Plyometric Push-Up is a weight training exercise targeting the Chest. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Plyometric+Push-Up",
  },
  {
    Muscles: "Chest",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/knee-push-ups.gif",
    WorkOut: "Staggered Push-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Staggered Push-Up: Perform push-ups with one hand forward and the other back, alternating the position each rep.",
    "Long Explanation":
      "The Staggered Push-Up is a weight training exercise targeting the Chest. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Staggered+Push-Up",
  },
];

//----------------------------------------------------->

const back = [
  {
    Muscles: "Back",
    img: "https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918",
    WorkOut: "Deadlift",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Deadlift: Lift a barbell or weights from the ground to hip level, keeping your back straight and driving with your legs.",
    "Long Explanation":
      "The Deadlift is a weight training exercise targeting the Back. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Deadlift",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif",
    WorkOut: "Pull-Ups",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Pull-up bar",
    Explaination:
      "Pull-Ups: Grip a bar with palms facing away and pull your body up until your chin is over the bar.",
    "Long Explanation":
      "The Pull-Ups is a weight training exercise targeting the Back. It involves using Pull-up bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Pull-Ups",
  },
  {
    Muscles: "Back",
    img: "https://i.pinimg.com/originals/c6/f7/47/c6f7479b3c35d406e71e8575e7df528d.gif",
    WorkOut: "Bent-Over Barbell Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Bent-Over Barbell Row: Bend at the waist, hold a barbell with both hands and pull it towards your lower chest or abdomen.",
    "Long Explanation":
      "The Bent-Over Barbell Row is a weight training exercise targeting the Back. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Bent-Over+Barbell+Row",
  },
  {
    Muscles: "Back",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Lat-Pulldown.gif",
    WorkOut: "Lat Pulldown",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with lat pulldown bar",
    Explaination:
      "Lat Pulldown: Sit at a lat pulldown machine, pull the bar down towards your chest while keeping your back straight.",
    "Long Explanation":
      "The Lat Pulldown is a weight training exercise targeting the Back. It involves using Cable machine with lat pulldown bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Lat+Pulldown",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/cable-row.gif",
    WorkOut: "Seated Cable Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine",
    Explaination:
      "Seated Cable Row: Sit at a cable row station, pull the handle towards your waist while keeping your back straight.",
    "Long Explanation":
      "The Seated Cable Row is a weight training exercise targeting the Back. It involves using Cable machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Seated+Cable+Row",
  },
  {
    Muscles: "Back",
    img: "https://liftingfaq.com/wp-content/uploads/2022/11/dumbbell-single-arm-row.gif",
    WorkOut: "Single-Arm Dumbbell Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Single-Arm Dumbbell Row: Bend over at the waist, use one hand to row a dumbbell, keeping your back parallel to the floor.",
    "Long Explanation":
      "The Single-Arm Dumbbell Row is a weight training exercise targeting the Back. It involves using Dumbbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Single-Arm+Dumbbell+Row",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/04/t-bar-row-machine.gif",
    WorkOut: "T-Bar Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and T-bar row machine or landmine attachment",
    Explaination:
      "T-Bar Row: Straddle a barbell, lift it using a T-bar attachment or handle, keeping your back straight.",
    "Long Explanation":
      "The T-Bar Row is a weight training exercise targeting the Back. It involves using Barbell and T-bar row machine or landmine attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=T-Bar+Row",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/inverted-row.gif",
    WorkOut: "Inverted Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bar or Smith machine",
    Explaination:
      "Inverted Row: Lie under a bar, pull your chest up to the bar with feet planted on the ground.",
    "Long Explanation":
      "The Inverted Row is a weight training exercise targeting the Back. It involves using Bar or Smith machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Inverted+Row",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension.gif",
    WorkOut: "Back Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Back extension bench",
    Explaination:
      "Back Extension: Use a back extension bench to lift your upper body up and down, focusing on lower back muscles.",
    "Long Explanation":
      "The Back Extension is a weight training exercise targeting the Back. It involves using Back extension bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Back+Extension",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/high-row.gif",
    WorkOut: "Machine Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Rowing machine",
    Explaination:
      "Machine Row: Sit at a row machine, pull the handles towards your torso, focusing on your middle back.",
    "Long Explanation":
      "The Machine Row is a weight training exercise targeting the Back. It involves using Rowing machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Machine+Row",
  },
  {
    Muscles: "Back",
    img: "https://musclemagfitness.com/wp-content/uploads/assisted-close-grip-underhand-chin-up-exercise.gif",
    WorkOut: "Chin-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Pull-up bar",
    Explaination:
      "Chin-Up: Grip a bar with palms facing towards you and pull up until your chin is over the bar, focusing on your upper back.",
    "Long Explanation":
      "The Chin-Up is a weight training exercise targeting the Back. It involves using Pull-up bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Chin-Up",
  },
  {
    Muscles: "Back",
    img: "https://liftingfaq.com/wp-content/uploads/2024/02/renegade-row-movement.gif",
    WorkOut: "Renegade Row",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Renegade Row: In a plank position with dumbbells, row one dumbbell up while stabilizing your body with the other arm.",
    "Long Explanation":
      "The Renegade Row is a weight training exercise targeting the Back. It involves using Dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Renegade+Row",
  },
  {
    Muscles: "Back",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Band-pull-apart.gif",
    WorkOut: "Resistance Band Pull Apart",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Resistance band",
    Explaination:
      "Resistance Band Pull Apart: Hold a resistance band in front of you and pull it apart horizontally, focusing on your rear shoulders and upper back.",
    "Long Explanation":
      "The Resistance Band Pull Apart is a weight training exercise targeting the Back. It involves using Resistance band, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Resistance+Band+Pull+Apart",
  },
  {
    Muscles: "Back",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/hyperextension-hyperextensions_geraet_ohne_gewicht.gif",
    WorkOut: "Hyperextension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Hyperextension bench",
    Explaination:
      "Hyperextension: On a hyperextension bench, lift and lower your upper body, targeting your lower back.",
    "Long Explanation":
      "The Hyperextension is a weight training exercise targeting the Back. It involves using Hyperextension bench, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hyperextension",
  },
  {
    Muscles: "Back",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-face-pull.gif",
    WorkOut: "Face Pull",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with rope or handle attachment",
    Explaination:
      "Face Pull: Use a cable machine with a rope attachment, pull towards your face while keeping your elbows high.",
    "Long Explanation":
      "The Face Pull is a weight training exercise targeting the Back. It involves using Cable machine with rope or handle attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Face+Pull",
  },
];

//----------------------------------------------------------->

const Legs = [
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/squat-jump.gif",
    WorkOut: "Squat",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell or dumbbells",
    Explaination:
      "Squat: Stand with feet shoulder-width apart, bend knees to lower your body as if sitting back, then stand up.",
    "Long Explanation":
      "The Squat is a weight training exercise targeting the Legs. It involves using Barbell or dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Squat",
  },
  {
    Muscles: "Legs",
    img: "https://www.kettlebellkings.com/cdn/shop/articles/barbell-deadlift-movement.gif?v=1692228918",
    WorkOut: "Deadlift",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Deadlift: Bend at your hips and knees to lower and grab a barbell, then stand up, lifting the weight.",
    "Long Explanation":
      "The Deadlift is a weight training exercise targeting the Legs. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Deadlift",
  },
  {
    Muscles: "Legs",
    img: "https://homeworkouts.org/wp-content/uploads/anim-forward-lunges.gif",
    WorkOut: "Lunges",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Lunges: Step forward with one foot and lower your body until both knees are bent at 90 degrees.",
    "Long Explanation":
      "The Lunges is a weight training exercise targeting the Legs. It involves using Dumbbells, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Lunges",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif",
    WorkOut: "Leg Press",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Leg press machine",
    Explaination:
      "Leg Press: Sit in a leg press machine, push the weighted platform away, then return to the starting position.",
    "Long Explanation":
      "The Leg Press is a weight training exercise targeting the Legs. It involves using Leg press machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Leg+Press",
  },
  {
    Muscles: "Legs",
    img: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/bulgarian-split-spuat_600x600.gif?v=1694400525",
    WorkOut: "Bulgarian Split Squat",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell and a bench or platform",
    Explaination:
      "Bulgarian Split Squat: Perform a lunge with your rear foot elevated on a bench or platform.",
    "Long Explanation":
      "The Bulgarian Split Squat is a weight training exercise targeting the Legs. It involves using Dumbbell and a bench or platform, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Bulgarian+Split+Squat",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/weighted-step-up.gif",
    WorkOut: "Step-Up",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bench or platform",
    Explaination:
      "Step-Up: Step up onto a bench or platform with one foot, then step back down and repeat with the other foot.",
    "Long Explanation":
      "The Step-Up is a weight training exercise targeting the Legs. It involves using Bench or platform, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Step-Up",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif",
    WorkOut: "Calf Raises",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Calf Raises: Stand on the edge of a step or platform and raise and lower your heels, working the calf muscles.",
    "Long Explanation":
      "The Calf Raises is a weight training exercise targeting the Legs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Calf+Raises",
  },
  {
    Muscles: "Legs",
    img: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/barbell-deadlift_600x600.gif?v=1690860568",
    WorkOut: "Romanian Deadlift",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Romanian Deadlift: Hold a barbell or dumbbells, bend at your hips, and lower your torso, keeping your legs straight.",
    "Long Explanation":
      "The Romanian Deadlift is a weight training exercise targeting the Legs. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Romanian+Deadlift",
  },
  {
    Muscles: "Legs",
    img: "https://static.wixstatic.com/media/2edbed_3ffafa0b4e694caf9e49b851d474f160~mv2.gif",
    WorkOut: "Leg Extension",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Leg extension machine",
    Explaination:
      "Leg Extension: Sit on a leg extension machine and extend your legs against resistance, then return to the start.",
    "Long Explanation":
      "The Leg Extension is a weight training exercise targeting the Legs. It involves using Leg extension machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Leg+Extension",
  },
  {
    Muscles: "Legs",
    img: "https://i.pinimg.com/originals/6b/aa/56/6baa56db563127e0cd7eb954ccf0ad9f.gif",
    WorkOut: "Leg Curl",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Leg curl machine",
    Explaination:
      "Leg Curl: Lie or sit on a leg curl machine and curl your legs towards your buttocks against resistance.",
    "Long Explanation":
      "The Leg Curl is a weight training exercise targeting the Legs. It involves using Leg curl machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Leg+Curl",
  },
  {
    Muscles: "Legs",
    img: "https://i.pinimg.com/originals/a8/1b/d3/a81bd30d072074fa2648afdbe885f125.gif",
    WorkOut: "Hack Squat",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Hack squat machine",
    Explaination:
      "Hack Squat: Use a hack squat machine, squat down while keeping your back against the pad, then stand back up.",
    "Long Explanation":
      "The Hack Squat is a weight training exercise targeting the Legs. It involves using Hack squat machine, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hack+Squat",
  },
  {
    Muscles: "Legs",
    img: "https://i.pinimg.com/originals/b2/e1/c3/b2e1c3f03807649d14bce36ce26d989a.gif",
    WorkOut: "Goblet Squat",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell or kettlebell",
    Explaination:
      "Goblet Squat: Hold a kettlebell or dumbbell at your chest, squat down while keeping your back straight.",
    "Long Explanation":
      "The Goblet Squat is a weight training exercise targeting the Legs. It involves using Dumbbell or kettlebell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Goblet+Squat",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/box-jump.gif",
    WorkOut: "Box Jump",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Box or sturdy platform",
    Explaination:
      "Box Jump: Stand in front of a box or platform and jump onto it with both feet, then step back down.",
    "Long Explanation":
      "The Box Jump is a weight training exercise targeting the Legs. It involves using Box or sturdy platform, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Box+Jump",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/resistance-band-glute-bridge.gif",
    WorkOut: "Glute Bridge",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Glute Bridge: Lie on your back with knees bent, lift your hips while squeezing your glutes, then lower back down.",
    "Long Explanation":
      "The Glute Bridge is a weight training exercise targeting the Legs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Glute+Bridge",
  },
  {
    Muscles: "Legs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/straight-leg-deadlift.gif",
    WorkOut: "Stiff-Legged Deadlift",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Stiff-Legged Deadlift: Similar to the Romanian deadlift, but with legs kept rigid and straight throughout the movement.",
    "Long Explanation":
      "The Stiff-Legged Deadlift is a weight training exercise targeting the Legs. It involves using Barbell, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Stiff-Legged+Deadlift",
  },
];

//------------------------------------------------------------->

const Abs = [
  {
    Muscles: "Abs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/plank.gif",
    WorkOut: "Plank",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Maintain a push-up position, keeping your body straight and holding the position to engage your entire core.",
    "Long Explanation":
      "The Plank is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Plank",
  },
  {
    Muscles: "Abs",
    img: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif",
    WorkOut: "Crunches",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your back, knees bent, lift your shoulders off the floor using your core muscles.",
    "Long Explanation":
      "The Crunches is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Crunches",
  },
  {
    Muscles: "Abs",
    img: "https://newlife.com.cy/wp-content/uploads/2019/02/00031301-air-bike-m_waist_FIX_360.gif",
    WorkOut: "Bicycle Crunches",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your back, alternate bringing your elbow to the opposite knee, mimicking a cycling motion.",
    "Long Explanation":
      "The Bicycle Crunches is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Bicycle+Crunches",
  },
  {
    Muscles: "Abs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/russian-twist.gif",
    WorkOut: "Russian Twists",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Pull-up bar or sturdy bar",
    Explaination:
      "Sit on the floor, lean back slightly, and twist your torso from side to side with or without a weight.",
    "Long Explanation":
      "The Russian Twists is a weight training exercise targeting the Abs. It involves using Pull-up bar or sturdy bar, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Russian+Twists",
  },
  {
    Muscles: "Abs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/hanging-leg-raise-movement.gif",
    WorkOut: "Hanging Leg Raises",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Hang from a pull-up bar and raise your legs to hip level, keeping them straight or bending knees.",
    "Long Explanation":
      "The Hanging Leg Raises is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hanging+Leg+Raises",
  },
  {
    Muscles: "Abs",
    img: "https://homeworkouts.org/wp-content/uploads/anim-mountain-climbers.gif",
    WorkOut: "Mountain Climbers",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Start in a plank position, then alternate bringing your knees towards your chest rapidly.",
    "Long Explanation":
      "The Mountain Climbers is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Mountain+Climbers",
  },
  {
    Muscles: "Abs",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/18531301-Hip-Lift-Low-Back-Off-Floor_Waist_360.gif",
    WorkOut: "Reverse Crunches",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your back and lift your hips off the ground, bringing your knees towards your chest.",
    "Long Explanation":
      "The Reverse Crunches is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Reverse+Crunches",
  },
  {
    Muscles: "Abs",
    img: "https://homeworkouts.org/wp-content/uploads/anim-leg-raise.gif",
    WorkOut: "Leg Raises",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Ab roller",
    Explaination:
      "Lie on your back, keep your legs straight, and lift them up towards the ceiling, then lower them without touching the floor.",
    "Long Explanation":
      "The Leg Raises is a weight training exercise targeting the Abs. It involves using Ab roller, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Leg+Raises",
  },
  {
    Muscles: "Abs",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/05071301-Jackknife-Sit-Up_waist_360.gif",
    WorkOut: "V-Ups",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your back, simultaneously lift your legs and torso, reaching for your toes.",
    "Long Explanation":
      "The V-Ups is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=V-Ups",
  },
  {
    Muscles: "Abs",
    img: "https://cdn.shopify.com/s/files/1/0075/4673/2662/files/ab-roller-exercise.gif",
    WorkOut: "Ab Roller",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Use an ab roller to roll forward from your knees or toes, then roll back, engaging your core.",
    "Long Explanation":
      "The Ab Roller is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Ab+Roller",
  },
  {
    Muscles: "Abs",
    img: "https://fitnessprogramer.com/wp-content/uploads/2022/12/Lying-Toe-Touches.gif",
    WorkOut: "Toe Touches",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine with rope or handle attachment",
    Explaination:
      "Lie on your back with legs extended upward, reach towards your toes with your hands.",
    "Long Explanation":
      "The Toe Touches is a weight training exercise targeting the Abs. It involves using Cable machine with rope or handle attachment, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Toe+Touches",
  },
  {
    Muscles: "Abs",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Flutter-Kicks.gif",
    WorkOut: "Flutter Kicks",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your back, lift your legs slightly off the ground, and make small, quick up-and-down scissor-like motions.",
    "Long Explanation":
      "The Flutter Kicks is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Flutter+Kicks",
  },
  {
    Muscles: "Abs",
    img: "https://fitliferegime.com/wp-content/uploads/2022/12/Cable-Wood-Chop.gif",
    WorkOut: "Cable Woodchoppers",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Use a cable machine, stand and twist your torso, pulling the cable diagonally across your body.",
    "Long Explanation":
      "The Cable Woodchoppers is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Cable+Woodchoppers",
  },
  {
    Muscles: "Abs",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif",
    WorkOut: "Body Saw Plank",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Start in a plank position, jump your feet in and out like a jumping jack.",
    "Long Explanation":
      "The Plank Jacks is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=body+saw+plank",
  },
  {
    Muscles: "Abs",
    img: "https://fitnessprogramer.com/wp-content/uploads/2023/01/Side-Plank-Rotation.gif",
    WorkOut: "Side Plank",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lie on your side, lift your body so that you are supported by your forearm and feet, hold the position to work the obliques.",
    "Long Explanation":
      "The Side Plank is a weight training exercise targeting the Abs. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Side+Plank",
  },
];

//--------------------------------------------------------------->

const Stretching = [
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/standing-hamstring-stretch.gif",
    WorkOut: "Hamstring Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Quadriceps Stretch: While standing, pull one foot back towards your glutes, holding your ankle. Hold for 15-30 seconds and switch legs.",
    "Long Explanation":
      "The Hamstring Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hamstring+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/prone-quad-stretch.gif",
    WorkOut: "Quadriceps Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Calf Stretch: Place your hands on a wall and extend one leg back, keeping your heel on the ground. Lean forward slightly. Hold for 15-30 seconds and switch legs.",
    "Long Explanation":
      "The Quadriceps Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Quadriceps+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://i.pinimg.com/originals/93/7d/d7/937dd77b8c95826c3033a14c9e60e9bc.gif",
    WorkOut: "Calf Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Shoulder Stretch: Bring one arm across your body and use the other arm to press it closer. Hold for 15-30 seconds and switch arms.",
    "Long Explanation":
      "The Calf Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Calf+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/cross-chest-shoulder-stretch.gif",
    WorkOut: "Shoulder Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Triceps Stretch: Raise one arm, bend it so that your hand reaches towards the opposite shoulder blade. Use your other hand to press the elbow gently. Hold for 15-30 seconds and switch arms.",
    "Long Explanation":
      "The Shoulder Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Shoulder+Stretch",
  },
  {
    Muscles: "Stretching",
    WorkOut: "Triceps Stretch",
    img: "https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2020/11/tricep-stretch-with-towel.gif",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Chest Stretch: Interlace your fingers behind your back, straighten your arms and lift them slightly while expanding your chest.",
    "Long Explanation":
      "The Triceps Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Triceps+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://i.pinimg.com/originals/f9/69/17/f96917eca63c436bcd85f7798a38aaac.gif",
    WorkOut: "Chest Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Hip Flexor Stretch: Kneel on one knee (cushion for comfort), with the other foot in front, forming a 90-degree angle. Push your hips forward.",
    "Long Explanation":
      "The Chest Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Chest+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/10531301-Kneeling-Hip-Flexor-Stretch_Hips_360.gif",
    WorkOut: "Hip Flexor Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Butterfly Stretch: Sit down, press the soles of your feet together, and push your knees towards the ground.",
    "Long Explanation":
      "The Hip Flexor Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hip+Flexor+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/butterfly-yoga-pose.gif",
    WorkOut: "Butterfly Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Seated Hamstring Stretch: Sit on the ground and extend your legs forward. Reach towards your toes.",
    "Long Explanation":
      "The Butterfly Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Butterfly+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Seated-Hamstring-Stretch.gif",
    WorkOut: "Seated Hamstring Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Spinal Twist: Sit on the ground with legs extended. Cross one leg over the other and twist your torso, pushing against your knee.",
    "Long Explanation":
      "The Seated Hamstring Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Seated+Hamstring+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://homeworkouts.org/wp-content/uploads/anim-supine-spinal-twist-pose.gif",
    WorkOut: "Spinal Twist",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Cat-Cow Stretch: On hands and knees, alternate between arching your back towards the ceiling (cat) and dipping it towards the floor (cow).",
    "Long Explanation":
      "The Spinal Twist is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Spinal+Twist",
  },
  {
    Muscles: "Stretching",
    img: "https://homeworkouts.org/wp-content/uploads/anim-cat-cow-pose.gif",
    WorkOut: "Cat-Cow Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Child's Pose: Kneel and sit on your heels, then lean forward with arms extended in front to stretch your back.",
    "Long Explanation":
      "The Cat-Cow Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Cat-Cow+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://fitnessprogramer.com/wp-content/uploads/2022/05/Child-to-Cobra-Pose.gif",
    WorkOut: "Child's to cobra Pose",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lying Quad Stretch: Lie on one side, pull your top leg’s ankle toward your glutes.",
    "Long Explanation":
      "The Child's Pose is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Child%27s+to+cobra+Pose+exercise",
  },
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/prone-quad-stretch.gif",
    WorkOut: "Lying Quad Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Lying Figure-4 Stretch: Lie on your back, cross one ankle over the opposite knee, and gently pull the uncrossed leg towards you.",
    "Long Explanation":
      "The Lying Quad Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Lying+Quad+Stretch",
  },
  {
    Muscles: "Stretching",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/pelvic-tilt.gif",
    WorkOut: "Anterior Pelvic Tilt",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Neck Stretch: Gently tilt your head towards each shoulder and hold for a few seconds.",
    "Long Explanation":
      "The Lying Figure-4 Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Anterior+Pelvic+Tilt+exercise",
  },
  {
    Muscles: "Stretching",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Rotating-Neck-Stretch.gif",
    WorkOut: "Neck Stretch",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Gently tilt your head towards each shoulder, holding the stretch for a few seconds to relieve tension and improve flexibility in the neck muscles. Avoid forcing the movement and keep the stretch comfortable.",
    "Long Explanation":
      "The Neck Stretch is a weight training exercise targeting the Stretching. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Neck+Stretch",
  },
];

//-------------------------------------------------------------------->

const WarmUp = [
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Run-in-Place-exercise.gif",
    WorkOut: "Jogging in Place",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination: "Jogging in Place: A simple way to elevate your heart rate.",
    "Long Explanation":
      "The Jogging in Place is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Jogging+in+Place",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2021/08/jumping-jacks.gif",
    WorkOut: "Jumping Jacks",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Jumping Jacks: A full-body movement that increases your heart rate and warms up your muscles.",
    "Long Explanation":
      "The Jumping Jacks is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Jumping+Jacks",
  },
  {
    Muscles: "Warm Up",
    img: "https://i.pinimg.com/originals/51/ae/a1/51aea1df721b5434b30d8ceb618446be.gif",
    WorkOut: "Arm Circles",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination: "Arm Circles: Great for warming up shoulders and arms.",
    "Long Explanation":
      "The Arm Circles is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Arm+Circles",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/09/Run-in-Place.gif",
    WorkOut: "High Knees",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "High Knees: Helps to increase heart rate and warm up leg muscles.",
    "Long Explanation":
      "The High Knees is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=High+Knees",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/10/Butt-Kicks.gif",
    WorkOut: "Butt Kicks",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Butt Kicks: Run in place while kicking your heels up towards your glutes.",
    "Long Explanation":
      "The Butt Kicks is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Butt+Kicks",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2023/06/Lateral-Leg-Swings.gif",
    WorkOut: "Leg Swings",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Leg Swings: Swing each leg back and forth, warming up your hip flexors and hamstrings.",
    "Long Explanation":
      "The Leg Swings is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Leg+Swings",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/09/russian-twist.gif",
    WorkOut: "Torso Twists",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Torso Twists: Stand with feet hip-width apart and twist your torso from side to side.",
    "Long Explanation":
      "The Torso Twists is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Torso+Twists",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif",
    WorkOut: "Side Lunges",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Side Lunges: Step out to the side and lunge, then switch sides. Great for warming up the inner thighs and glutes.",
    "Long Explanation":
      "The Side Lunges is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Side+Lunges",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/hip-circle.gif",
    WorkOut: "Hip Circles",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Hip Circles: Rotate your hips in large circles to loosen up the hip area.",
    "Long Explanation":
      "The Hip Circles is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Hip+Circles",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Arm-Scissors.gif",
    WorkOut: "Arm Swings",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Arm Swings: Swing your arms back and forth across your body to loosen up your chest and back.",
    "Long Explanation":
      "The Arm Swings is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Arm+Swings",
  },
  {
    Muscles: "Warm Up",
    img: "https://fitnessprogramer.com/wp-content/uploads/2022/12/ATG-Split-Squat.gif",
    WorkOut: "Dynamic Stretching (e.g., Lunges with a Twist)",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Dynamic Stretching (e.g., Lunges with a Twist): Incorporating movement with stretching to warm up the body.",
    "Long Explanation":
      "The Dynamic Stretching (e.g., Lunges with a Twist) is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video:
      "https://www.youtube.com/results?search_query=Dynamic+Stretching+(e.g.,+Lunges+with+a+Twist)",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/inchworm-muscles.gif",
    WorkOut: "Inchworms",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Inchworms: Stand, bend at the waist, walk your hands out to a plank, then walk feet towards hands.",
    "Long Explanation":
      "The Inchworms is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Inchworms",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/jump-rope.gif",
    WorkOut: "Jump Rope",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Jump Rope: A good cardiovascular exercise to get the blood flowing.",
    "Long Explanation":
      "The Jump Rope is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Jump+Rope",
  },
  {
    Muscles: "Warm Up",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/boxing-muscles.gif",
    WorkOut: "Shadow Boxing",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Shadow Boxing: Throw punches in the air, warming up your upper body and increasing heart rate.",
    "Long Explanation":
      "The Shadow Boxing is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Shadow+Boxing",
  },
  {
    Muscles: "Warm Up",
    img: "https://homeworkouts.org/wp-content/uploads/anim-mountain-climbers.gif",
    WorkOut: "Mountain Climbers",
    Intensity_Level: "Expert",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: null,
    Explaination:
      "Mountain Climbers: A dynamic exercise that increases heart rate and warms up the whole body.",
    "Long Explanation":
      "The Mountain Climbers is a weight training exercise targeting the Warm Up. It involves using nan, focusing on the form and technique to effectively engage the muscles. Ideal for strength building and muscle definition, it's important to maintain controlled movements throughout.",
    Video: "https://www.youtube.com/results?search_query=Mountain+Climbers",
  },
];

//-------------------------------------------------------------------->

const Calves = [
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif",
    WorkOut: "Standing Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Box or platform",
    Explaination:
      "Increases calf muscle size and strength, essential for lower leg aesthetics and function.",
    "Long Explanation":
      "Raise your heels while standing.    Stand on a step or platform with your heels hanging off the edge. Raise your heels as high as possible, then lower them back down.",
    Video: "https://www.youtube.com/results?search_query=Standing+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://i.pinimg.com/originals/fd/19/2b/fd192bb6ef1ff52e0babb696c59500f1.gif",
    WorkOut: "Seated Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Calf raise machine",
    Explaination:
      "Targets the soleus muscle in the calves, crucial for calf development.",
    "Long Explanation":
      "Raise your heels while sitting.    Sit on a weight bench with a weight on your knees. Raise your heels as high as possible, then lower them back down.",
    Video: "https://www.youtube.com/results?search_query=Seated+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://i.pinimg.com/originals/62/f8/d3/62f8d33cb91dd4fedbd33a88f1bf308e.gif",
    WorkOut: "Calf Press On Leg Machine",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Weight bench",
    Explaination:
      "Strengthens the calves, enhancing lower leg power and stability.",
    "Long Explanation":
      "Press with your feet on a leg press machine.    Sit on a leg press machine with your feet on the platform. Push the platform away from you by extending your knees, then return to the starting position.",
    Video:
      "https://www.youtube.com/results?search_query=Calf+Press+On+Leg+Machine",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2021/06/single-leg-standing-calf-raise.gif",
    WorkOut: "Single-Leg Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Leg press machine",
    Explaination:
      "Isolates each calf, improving muscular balance and ankle stability.",
    "Long Explanation":
      "Raise one heel while standing.    Stand on one leg with your heel hanging off a step or platform. Raise your heel as high as possible, then lower it back down.",
    Video: "https://www.youtube.com/results?search_query=Single-Leg+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/box-jump.gif",
    WorkOut: "Box Jumps",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bodyweight",
    Explaination: "Enhances explosive power, coordination, and calf strength.",
    "Long Explanation":
      "Jump repeatedly for a set amount of time.    Stand with your feet shoulder-width apart. Bend your knees and jump up, landing softly and immediately jumping again.",
    Video: "https://www.youtube.com/results?search_query=Box+Jumps",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/benefits-of-farmers-walks.gif",
    WorkOut: "Farmer’s Walk on Toes",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Box or platform",
    Explaination:
      "Builds calf strength and improves overall stability and grip strength.",
    "Long Explanation":
      "Walk holding weights on your toes.    Hold a weight in each hand and walk on your toes for a set distance or time.",
    Video: "https://www.youtube.com/results?search_query=Farmer’s+Walk+on+Toes",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/jump-rope.gif",
    WorkOut: "Jump Rope",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Weighted vest or dumbbells",
    Explaination:
      "Increases calf endurance and coordination, beneficial for cardiovascular health.",
    "Long Explanation":
      "Jump over a rope that is swung under your feet.    Hold the ends of a jump rope and swing it under your feet, jumping over it each time it comes around.",
    Video: "https://www.youtube.com/results?search_query=Jump+Rope",
  },
  {
    Muscles: "Calves",
    img: "https://i.pinimg.com/originals/9d/19/a7/9d19a7f089d639e93b4e910042f6a679.gif",
    WorkOut: "Stair Climbs",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Jump rope",
    Explaination: "Strengthens calves and improves cardiovascular endurance.",
    "Long Explanation":
      "Climb stairs for a set amount of time.    Find a set of stairs and climb up and down them continuously for a set amount of time.",
    Video: "https://www.youtube.com/results?search_query=Stair+Climbs",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/dumbbell-squat.gif",
    WorkOut: "Dumbbell Jump Squat",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Stairs",
    Explaination:
      "Builds explosive power and strength in the lower body, particularly in the calves.",
    "Long Explanation":
      "Squat and jump holding dumbbells.    Hold a dumbbell in each hand at your sides. Squat down, then jump up explosively.",
    Video: "https://www.youtube.com/results?search_query=Dumbbell+Jump+Squat",
  },
  {
    Muscles: "Calves",
    img: "https://i.pinimg.com/originals/fd/19/2b/fd192bb6ef1ff52e0babb696c59500f1.gif",
    WorkOut: "Barbell Seated Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Targets the soleus muscle, essential for improving calf strength and endurance.",
    "Long Explanation":
      "Raise your heels while sitting with a barbell on your knees.    Sit on a weight bench with a barbell on your knees. Raise your heels as high as possible, then lower them back down.",
    Video:
      "https://www.youtube.com/results?search_query=Barbell+Seated+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Leg-Press-Calf-Raise.gif",
    WorkOut: "Leg Press Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell and weight bench",
    Explaination:
      "Strengthens the calves, utilizing the leg press machine for focused calf training.",
    "Long Explanation":
      "Raise your heels on a leg press machine.    Sit on a leg press machine with your feet on the lower part of the platform. Push the platform away from you by extending your knees, then return to the starting position.",
    Video: "https://www.youtube.com/results?search_query=Leg+Press+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/negative-calf-raise.gif",
    WorkOut: "Reverse Calf Raise",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Leg press machine",
    Explaination:
      "Targets the tibialis anterior, balancing the development of the lower leg.",
    "Long Explanation":
      "Raise your heels while standing without weights.    Stand on a step or platform with your heels hanging off the edge. Raise your heels as high as possible, then lower them back down.",
    Video: "https://www.youtube.com/results?search_query=Reverse+Calf+Raise",
  },
  {
    Muscles: "Calves",
    img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif",
    WorkOut: "Calf Raise on a Dumbbell",
    Intensity_Level: "Beginner",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bodyweight",
    Explaination:
      "Allows for a greater range of motion in calf raises, enhancing calf development.",
    "Long Explanation":
      "Raise one heel while holding a dumbbell.    Stand on one leg with a dumbbell in one hand and your heel hanging off a step or platform. Raise your heel as high as possible, then lower it back down.",
    Video:
      "https://www.youtube.com/results?search_query=Calf+Raise+on+a+Dumbbell",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/03/donkey-calf-raise.gif",
    WorkOut: "Donkey Calf Raises",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Strengthens the calves with the added challenge of kettlebell weight.",
    "Long Explanation":
      "Swing a kettlebell between your legs and then up to chest height.    Stand with your feet shoulder-width apart holding a kettlebell between your legs. Swing the kettlebell up to chest height by extending your hips and knees, then let it swing back between your legs.",
    Video:
      "https://www.youtube.com/results?search_query=Donkey+Calf+Raises+exercise",
  },
  {
    Muscles: "Calves",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2023/08/smith-machine-calf-raise.gif",
    WorkOut: "Smith Machine Calf Raise",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Kettlebell",
    Explaination:
      "Provides a stable way to perform calf raises, focusing on calf strength.",
    "Long Explanation":
      "Raise your heels on a Smith machine.    Stand on a step or platform with your heels hanging off the edge and the bar of a Smith machine resting on your shoulders. Raise your heels as high as possible, then lower them back down.",
    Video:
      "https://www.youtube.com/results?search_query=Smith+Machine+Calf+Raise",
  },
];

//--------------------------------------------------------------------->

const Shoulders = [
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/seated-overhead-press.gif",
    WorkOut: "Military Press",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Builds overall shoulder strength and stability, essential for upper body development.",
    "Long Explanation":
      "Sit or stand with a barbell at shoulder height. Press the barbell upwards until your arms are fully extended overhead. Lower it back down to shoulder height.",
    Video: "https://www.youtube.com/results?search_query=Military+Press",
  },
  {
    Muscles: "Shoulders",
    img: "https://i.pinimg.com/originals/2b/ef/ba/2befbad569f6f8ad31fe03a77cf45ab6.gif",
    WorkOut: "Dumbbell Shoulder Press",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Strengthens the entire shoulder region, enhancing muscular balance and shoulder health.",
    "Long Explanation":
      "Sit or stand with a pair of dumbbells at shoulder height. Press the dumbbells upwards until your arms are fully extended. Lower them back down to shoulder height.",
    Video:
      "https://www.youtube.com/results?search_query=Dumbbell+Shoulder+Press",
  },
  {
    Muscles: "Shoulders",
    img: "https://homeworkouts.org/wp-content/uploads/anim-dumbbell-lateral-raise.gif",
    WorkOut: "Lateral Raises",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell or dumbbells",
    Explaination:
      "Isolates the lateral part of the shoulder, building width and strength.",
    "Long Explanation":
      "Hold a pair of dumbbells at your sides. Lift the dumbbells out to the sides until your arms are parallel to the floor, keeping a slight bend in your elbows. Lower them back down in a controlled manner.",
    Video: "https://www.youtube.com/results?search_query=Lateral+Raises",
  },
  {
    Muscles: "Shoulders",
    img: "https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif",
    WorkOut: "Front Raises",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine",
    Explaination:
      "Targets the front deltoids, strengthening the anterior shoulder region.",
    "Long Explanation":
      "Stand with dumbbells in your hands. Lift the dumbbells straight in front of you until your arms are parallel to the floor, then lower them back down.",
    Video: "https://www.youtube.com/results?search_query=Front+Raises",
  },
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/reverse-pec-dec-machine.gif",
    WorkOut: "Reverse Flyes",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Enhances rear deltoid and upper back strength, balancing shoulder development.",
    "Long Explanation":
      "Bend forward at the waist with dumbbells in your hands. Lift the dumbbells out to the sides, squeezing your shoulder blades together. Lower them back down in a controlled manner.",
    Video: "https://www.youtube.com/results?search_query=Reverse+Flyes",
  },
  {
    Muscles: "Shoulders",
    img: "https://newlife.com.cy/wp-content/uploads/2019/11/21371301-Dumbbell-Arnold-Press_Shoulders_360.gif",
    WorkOut: "Arnold Press",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Combines a shoulder press and bicep curl, targeting the entire shoulder complex.",
    "Long Explanation":
      "Sit with a pair of dumbbells at shoulder height, palms facing you. As you press the dumbbells overhead, rotate your arms so your palms face forward at the top. Lower them back down while rotating your palms back towards you.",
    Video: "https://www.youtube.com/results?search_query=Arnold+Press",
  },
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/barbell-upright-row-standing.gif",
    WorkOut: "Upright Rows",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine",
    Explaination:
      "Strengthens the shoulders and traps, improving upper body muscular balance.",
    "Long Explanation":
      "Stand with a barbell or dumbbells. Lift the weight upwards by raising your elbows, keeping the bar close to your body. Lower it back down after reaching chest height.",
    Video: "https://www.youtube.com/results?search_query=Upright+Rows",
  },
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/push-press.gif",
    WorkOut: "Push Press",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Bench",
    Explaination:
      "Develops explosive shoulder strength and power, beneficial for overall fitness.",
    "Long Explanation":
      "Start with a barbell at shoulder height. Dip your knees slightly, then explosively extend your legs and arms to press the barbell overhead. Lower it back down to shoulder height.",
    Video: "https://www.youtube.com/results?search_query=Push+Press",
  },
  {
    Muscles: "Shoulders",
    img: "https://newlife.com.cy/wp-content/uploads/2019/12/00951301-Barbell-Shrug_Back_360.gif",
    WorkOut: "Barbell Shrugs",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbell",
    Explaination:
      "Builds size and strength in the trapezius muscles, enhancing upper back development.",
    "Long Explanation":
      "Stand with a barbell and lift your shoulders to perform a shrug. Keep your arms straight and focus on the upward movement of your shoulders. Lower back down slowly.",
    Video: "https://www.youtube.com/results?search_query=Barbell+Shrugs",
  },
  {
    Muscles: "Shoulders",
    img: "https://newlife.com.cy/wp-content/uploads/2019/08/03801301-Dumbbell-Rear-Lateral-Raise_Shoulders_360.gif",
    WorkOut: "Bent-Over Dumbbell Lateral Raise",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Cable machine",
    Explaination:
      "Isolates the lateral deltoids, improving shoulder width and balance.",
    "Long Explanation":
      "Bend forward with a pair of dumbbells. Lift the dumbbells out to the sides, keeping a slight bend in your elbows. Lower them back down in a controlled manner.",
    Video:
      "https://www.youtube.com/results?search_query=Bent-Over+Dumbbell+Lateral+Raise",
  },
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/cable-one-arm-lateral-raise.gif",
    WorkOut: "Cable Lateral Raise",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell hip thrust bench or platform",
    Explaination:
      "Strengthens the lateral deltoids with adjustable resistance, enhancing shoulder development.",
    "Long Explanation":
      "Stand in front of a cable machine with a handle attached to a low pulley. Lift the handle out to the side until your arm is parallel to the floor, then lower it back down.",
    Video: "https://www.youtube.com/results?search_query=Cable+Lateral+Raise",
  },
  {
    Muscles: "Shoulders",
    img: "https://newlife.com.cy/wp-content/uploads/2018/12/23171301-Dumbbell-Seated-Bent-Arm-Lateral-raise_Shoulders_360.gif",
    WorkOut: "Seated Bent-Over Rear Delt Raise",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Targets the rear deltoids and upper back, improving shoulder health and stability.",
    "Long Explanation":
      "Sit on a bench and lean forward. Hold a pair of dumbbells and lift them out to the sides, squeezing your shoulder blades together. Lower them back down in a controlled manner.",
    Video:
      "https://www.youtube.com/results?search_query=Seated+Bent-Over+Rear+Delt+Raise",
  },
  {
    Muscles: "Shoulders",
    img: "https://www.inspireusafoundation.org/wp-content/uploads/2022/07/landmine-press.gif",
    WorkOut: "Single-Arm Linear Jammer",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Dumbbells",
    Explaination:
      "Builds unilateral shoulder strength and power, enhancing athletic performance.",
    "Long Explanation":
      "Stand in front of a machine or anchor point with a handle. Pull the handle downwards and across your body in a linear motion, then return to the starting position.",
    Video:
      "https://www.youtube.com/results?search_query=Single-Arm+Linear+Jammer",
  },
  {
    Muscles: "Shoulders",
    img: "https://i.pinimg.com/originals/1b/d3/4f/1bd34f913d89df896ba857018a66b4f8.gif",
    WorkOut: "Standing Dumbbell Fly",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Barbell",
    Explaination:
      "Strengthens the shoulders and upper chest, improving overall shoulder health.",
    "Long Explanation":
      "Stand with a pair of dumbbells and lift them out to the sides, slightly in front of your body. Lower them back down in a controlled manner.",
    Video: "https://www.youtube.com/results?search_query=Standing+Dumbbell+Fly",
  },
  {
    Muscles: "Shoulders",
    img: "https://media.tenor.com/vFJSvh8AvhAAAAAM/a1.gif",
    WorkOut: "Machine Shoulder Press",
    Intensity_Level: "Intermediate",
    "Beginner Sets": "3 Sets with 12 to 15 reps",
    "Intermediate Sets": "4 Sets with 8 to 12 reps",
    "Expert Sets": "5 Sets with 3 to 10 reps",
    Equipment: "Kettlebell",
    Explaination:
      "Provides a controlled environment for shoulder pressing, focusing on strength and stability.",
    "Long Explanation":
      "Sit in a shoulder press machine and press the handles upwards until your arms are fully extended. Lower them back down to shoulder height.",
    Video:
      "https://www.youtube.com/results?search_query=Machine+Shoulder+Press",
  },
];

export {
  biceps,
  triceps,
  chest,
  back,
  Legs,
  Abs,
  Stretching,
  WarmUp,
  Calves,
  Shoulders,
};

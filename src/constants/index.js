export const myProjects = [
  {
    id: 1,
    title: "Football Video Analytics with Custom Tracking System",
    description:
      "Modeled YOLO-11 object detection with 5k images to perform custom track on players, referees, and ball with additional analytics.",
    subDescription: [
      "Implemented persistent player identification with color-coded markers using K-means clustering.",
      "Developed real-time speed and distance metrics through perspective transformation and optical flow.",
      "Rendered camera movement and ball tracking with linear interpolation.",
    ],
    image: "/assets/projects/FootballVideoAnalytics.png",
    tags: [
      { id: 1, name: "YOLO", path: "/assets/logos/icons8-yolo-48.png" },
      { id: 2, name: "OpenCV", path: "/assets/logos/icons8-github-48.png" },
      { id: 3, name: "Python", path: "/assets/logos/icons8-python-48.png" },
    ],
    href: "https://uillinoisedu-my.sharepoint.com/:v:/g/personal/ssk16_illinois_edu/EVE67EhvNTpAnSdbgeNSJToBc4SWbXO3mm_ne-0R6dfyyg?e=KcTVSP&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D",
  },
  {
    id: 2,
    title: "Prognosis of Cardiovascular Diseases Using Chest Radiographs",
    description:
      "Piloted 4 YOLO models (V5 to V8) for multi-class detection of 14 lung and heart diseases.",
    subDescription: [
      "Trained on 200GB DICOM files and coded a FastAPI backend integrated with React.",
      "Enabled real-time disease inference and doctor recommendations.",
    ],
    image: "/assets/projects/Chest-Cardio-diseases-project.png",
    tags: [
      { id: 1, name: "YOLOv5-v8", path: "/assets/logos/icons8-yolo-48.png" },
      { id: 2, name: "FastAPI", path: "/assets/logos/FastAPI.png" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
    ],
    href: "https://github.com/SHREYAS290601/Heart-Health-BE-PROJECT",
  },
  {
    id: 3,
    title: "Football Data Engineering Project",
    description:
      "Built an end-to-end Airflow and PySpark pipeline for football stadium data.",
    subDescription: [
      "Extracted and transformed data for 2,000 stadiums from Wikipedia.",
      "Stored in Azure Data Lake, integrated with Synapse for querying.",
      "Created PowerBI dashboards for visualization.",
    ],
    image: "/assets/projects/Football-Stadium-ETL-project.png",
    tags: [
      { id: 1, name: "Airflow", path: "/assets/logos/apache-airflow.png" },
      {
        id: 2,
        name: "PySpark",
        path: "/assets/logos/icons8-apache-spark-48.png",
      },
      { id: 3, name: "Azure", path: "/assets/logos/icons8-azure-48.png" },
    ],
    href: ""
  },
  {
    id: 4,
    title: "Exercise Classifier Using Fitness Tracker",
    description:
      "Pioneered a robust data pipeline using 14 days of tracker data and advanced preprocessing.",
    subDescription: [
      "Performed outlier detection and feature engineering.",
      "Achieved 98% accuracy with Random Forest and 80%+ with other ML models.",
    ],
    image: "/assets/projects/exercise-classification.png",
    tags: [
      { id: 1, name: "Sklearn", path: "/assets/logos/scikit-learn.png" },
      { id: 2, name: "Python", path: "/assets/logos/icons8-python-48.png" },
    ],
    href: "https://github.com/SHREYAS290601/Fitness-Tracker",
  },
];
export const experiences = [
  {
    title: "Data Science Intern",
    job: "DSRS University of Illinois, Urbana-Champaign",
    date: "July 2025 - Present",
    contents: [
      "Will be working on in-house research projects, focusing on advanced data science applications and machine learning techniques.",
      "Working on Knowledge based systems fuled by LLMs, with a focus on enhancing the capabilities of AI systems through structured knowledge integration.",
    ],
  },
  {
    title: "Associate Data Scientist",
    job: "Apptware Pvt. Ltd., Pune",
    date: "April 2023 - June 2024",
    contents: [
      "Architected a Python backend with GPT-4, NLP, and Vectara (RAG), processing 500+ web links, reducing manual analysis time by 90%, improving chatbot accuracy for 20+ clients, and delivering results in a Scrum-based team environment.",
      "Programmed a PyTorch-based Pix2Pix model with 2,000 images to convert CT scans to MRI, mitigated speech-to-text model latency by 80%, from 1s to 200ms, across two separate POC projects.",
      "Fine-tuned a YOLOv8 nano model on 8,000+ images, achieved real-time, high-accuracy fruit counting on 3 fruits (apples, oranges, mangoes) in mobile camera settings.",
      "Implemented modern CSV-to-MSSQL data pipeline on Linux, processing 470K+ rows through 3-layer medallion architecture ETL (standardization, imputation, cleaning), generating fact tables for Tableau dashboards.",
    ],
  },
  {
    title: "Data Science Intern",
    job: "Apptware Pvt. Ltd., Pune",
    date: "September 2022 - April 2023",
    contents: [
      "Delivered a Chatbot User Interface with Chainlit, integrating GPT-4 and MySQL to trigger 20 user-defined functions across 5 different tables for an e-commerce client.",
      "Created a custom chatbot, for an e-commerce platform, with a fine-tuned Falcon-7B model over 200 QnA instances, and enhanced the chatbot’s ability to answer customer queries effectively.",
      "Performed LDA topic modeling on 80 medical claim PDF documents with a coherence score of 0.6.",
    ],
  },
];

export const reviews = [
  {
    id: 1,
    img: "/assets/reviews/yameenSir.jpg",
    name: "Yameen Hakim",
    role: "Senior Data Scientist at Apptware",
    body:
      "Shreyas is a highly skilled data scientist with a strong foundation in machine learning and data analysis. He has a keen eye for detail and is able to extract valuable insights from complex datasets. His ability to communicate technical concepts in a clear and concise manner makes him an asset to any team.",
  },
  {
    id: 5,
    name: "Atharva Joshi",
    role: "Frontend Developer at Apptware",
    img: "/assets/reviews/atharvaJoshi.jpg",
    body:
      "Shreyas is a brilliant Data Scientist with a passion for solving complex problems. He has a deep understanding of machine learning algorithms and is able to apply them effectively to real-world problems. His ability to work with large datasets and extract meaningful insights is impressive.",
  },
  {
    id: 2,
    name: "Aniket Tathe",
    role: "ML/Data Science Engineer at Schnucks",
    img: "/assets/reviews/aniketTathe.jpg",
    body:
      "Shreyas is an exceptional Data Scientist with a deep understanding of Data Science and ML development principles. He is able to design and implement complex systems with ease, and his attention to detail ensures that the code he writes is of the highest quality.",
  },
  {
    id: 3,
    name: "Anisha Kango",
    role: "Data Analyst/SAP Consultant at Volkswagen",
    img: "/assets/reviews/anishaKango.jpg",
    body:
      "Shreyas is a talented Data Scientist with a strong background in statistics and data visualization. He is able to turn raw data into actionable insights, and his ability to communicate findings to non-technical stakeholders is impressive.",
  },
  {
    id: 4,
    name: "Amitabh Swain",
    role: "ML Engineer at Amazon Audible",
    img: "/assets/reviews/amitabhSwain.jpg",
    body:
      "Shreyas is a dedicated and hardworking Data Scientist who is always willing to go the extra mile to ensure that his work is of the highest quality. He is able to work independently or as part of a team, and his positive attitude makes him a pleasure to work with.",
  },
  {
    id: 5,
    name: "Jeet Thakor",
    role: "Data Analyst at Astellas Pharma",
    img: "/assets/reviews/jeetThakore.jpg",
    body:
      "Shreyas is a creative and innovative Data Scientist who is always looking for new ways to solve problems. He is able to think outside the box and come up with unique solutions that deliver real value to his clients.",
  },
];
export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/SHREYAS290601",
    icon: "/assets/socials/icons8-github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shreyaskulkarni29/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const trial = [
  {
    name: "Email",
  },
  {
    name: "Phone",
  },
  { name: "Address" },
];

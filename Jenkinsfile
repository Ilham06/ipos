pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ilham06/ipos'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build the app') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Start the app') {
            steps {
                sh 'npm run start'
            }
        }
        // Optional test & deploy
        // stage('Test') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         sh './deploy.sh'
        //     }
        // }
    }
    post {
        success {
            echo 'Pipeline completed successfully! ✨'
        }
        failure {
            echo 'Something went wrong... (´；ω；｀)'
        }
    }
}

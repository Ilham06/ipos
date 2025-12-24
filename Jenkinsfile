pipeline {
  agent any

  environment {
    APP_DIR = "/srv/money-tracking"
  }

  stages {
    stage('Checkout') {
      steps {
        dir(APP_DIR) {
          checkout scm
        }
      }
    }

    stage('Build & Deploy') {
      steps {
        dir(APP_DIR) {
          sh '''
          docker compose down
          docker compose build
          docker compose up -d
          '''
        }
      }
    }
  }
}

pipeline {
    agent any

    environment {
        IMAGE_NAME = "ilhammuhamad/ipos-fe"
        IMAGE_TAG = "latest"
        VPS_HOST = "168.231.118.205"
        VPS_USER = "root" // Misalnya root atau user di VPS
        SSH_CREDENTIALS_ID = "vps-key" // Credentials ID dari SSH Key di Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_ID, keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        # Copy SSH private key ke lokasi sementara
                        mkdir -p ~/.ssh
                        cp $SSH_KEY ~/.ssh/id_rsa
                        chmod 600 ~/.ssh/id_rsa

                        # SSH ke VPS dan jalankan perintah deploy
                        ssh -o StrictHostKeyChecking=no $VPS_USER@$VPS_HOST << 'EOF'
                            cd /root/projects/ipos-fe/ipos
                            docker pull ${IMAGE_NAME}:${IMAGE_TAG}
                            docker-compose down || true
                            docker-compose up -d
EOF
                    '''
                }
            }
        }
    }
}

pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}



docker run -d --name jenkins_node1 -p 49003:8080 -v /Users/mac/working/myself/jenkins_node1:/var/jenkins_home jenkins/jenkins:latest
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building branch: ${env.BRANCH_NAME}"

                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'

                bat 'npm test'
            }
        }

        stage('Deploy') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }

            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        echo 'Deploying to PRODUCTION...'
                        // Production deployment commands
                    } else if (env.BRANCH_NAME == 'develop') {
                        echo 'Deploying to STAGING...'
                        // Staging deployment commands
                    }
                }
            }
        }
    }

    post {
        success {
            echo "Build successful for branch: ${env.BRANCH_NAME}"
        }

        failure {
            echo "Build failed for branch: ${env.BRANCH_NAME}"
        }
    }
}
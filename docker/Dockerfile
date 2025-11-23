############################################
# STAGE 1 — BUILDER IMAGE
############################################   
FROM node:20 AS builder
# Small, secure, stable Node.js base image for building NestJS

WORKDIR /app                      
# Set working directory inside the container

COPY ../codes/package*.json ./    
# Copy only package.json & package-lock.json for caching layer
RUN npm install --legacy-peer-deps 
# Install dependencies; peer deps warning safe for NestJS

COPY ../codes .                   
# Copy entire NestJS project source code

RUN npm run build                 
# Build the NestJS project (dist/ folder created)

############################################
# STAGE 2 — PRODUCTION IMAGE
############################################
FROM node:20-alpine               
# Clean, lightweight final image

WORKDIR /app

# Create a non-root user (security best practice)
RUN addgroup -S nodegroup && adduser -S nodejs -G nodegroup  

# Copy built assets & minimal dependencies only
COPY --from=builder /app/package*.json ./  
COPY --from=builder /app/node_modules ./node_modules     
COPY --from=builder /app/dist ./dist                      

# Expose NestJS default port
EXPOSE 3000                      

# Use non-root user for container safety
USER nodejs                      

CMD ["node", "dist/main.js"]     # Start the NestJS app

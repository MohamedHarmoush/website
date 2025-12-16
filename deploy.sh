#!/bin/bash

# GitHub Pages Deployment Script
# This script helps you deploy your resume website to GitHub Pages

echo "🚀 GitHub Pages Deployment Script"
echo "=================================="
echo ""

# Check if remote exists
if git remote get-url origin &>/dev/null; then
    echo "✅ Remote repository found:"
    git remote get-url origin
    echo ""
    read -p "Push to GitHub now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        echo ""
        echo "✅ Code pushed successfully!"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\/[^/]*\)\.git.*/\1/')/settings/pages"
        echo "2. Set Source to: GitHub Actions"
        echo "3. Set Custom domain to: mohamedHarmoush.com"
        echo "4. Configure DNS at your domain registrar"
        echo ""
        echo "See DEPLOYMENT_GUIDE.md for detailed instructions"
    fi
else
    echo "⚠️  No GitHub remote configured yet"
    echo ""
    read -p "Enter your GitHub username: " GITHUB_USERNAME
    read -p "Enter your repository name (or press Enter for 'website'): " REPO_NAME
    REPO_NAME=${REPO_NAME:-website}
    
    echo ""
    echo "Choose connection method:"
    echo "1) HTTPS (easier, requires GitHub token)"
    echo "2) SSH (requires SSH keys set up)"
    read -p "Enter choice (1 or 2): " CONNECTION_TYPE
    
    if [ "$CONNECTION_TYPE" = "1" ]; then
        REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    else
        REMOTE_URL="git@github.com:$GITHUB_USERNAME/$REPO_NAME.git"
    fi
    
    echo ""
    echo "Adding remote: $REMOTE_URL"
    git remote add origin "$REMOTE_URL"
    
    echo ""
    read -p "Push to GitHub now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        echo ""
        echo "✅ Code pushed successfully!"
        echo ""
        echo "📋 Next steps:"
        echo "1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
        echo "2. Set Source to: GitHub Actions"
        echo "3. Set Custom domain to: mohamedHarmoush.com"
        echo "4. Configure DNS at your domain registrar"
        echo ""
        echo "See DEPLOYMENT_GUIDE.md for detailed instructions"
    else
        echo "Remote added. Run 'git push -u origin main' when ready."
    fi
fi


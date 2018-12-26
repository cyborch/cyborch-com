#!/bin/bash

# Load bash completions
[ -f /usr/local/etc/bash_completion ] && . /usr/local/etc/bash_completion

# Serial connection to Edison
alias edison="screen /dev/cu.usbserial-DA01P0S1 115200 -L"

# TextMate is still my favorite general purpose editor
export EDITOR="mate -w"

# Activate a named docker machine
docker-machine-set-active() {
  eval $(docker-machine env $1)
}

# Create digital ocean droplet
docker-create-droplet() {
  if [[ "$1" == "" || "$2" == "" || "$3" == "" ]] ; then
    echo "USAGE: docker-create-droplet TOKEN REGION NAME"
    echo "  TOKEN   the Digital Ocean access token"
    echo "  REGION  the region in which the droplet should be created"
    echo "  NAME    the name of the droplet"
    return
  fi
  docker-machine create --driver digitalocean --digitalocean-image ubuntu-16-04-x64 --digitalocean-access-token $1 --digitalocean-region $2 $3
}

docker-restart-droplet() {
  if [[ "$1" == "" || "$2" == "" ]] ; then
    echo "USAGE: docker-restart-droplet NAME ENVIRONMENT"
    echo "  NAME         the name of the service"
    echo "  ENVIRONMENT  the environment the service will run in"
    return
  fi
  echo -n "Stopping $1..."
  docker stop $1 >/dev/null 2>&1
  echo -e "   \033[32mdone\033[39m"
  echo -n "Cleaning $1..."
  docker rm $1 >/dev/null 2>&1
  echo -e "   \033[32mdone\033[39m"
  echo -n "Starting $1..."
  result=`docker run --name $1 -d --restart always $1:$2`
  if [[ "$?" == "0" ]] ; then
    echo -e "   \033[32mdone\033[39m"
  else
    echo -e "   \033[31m$result\033[39m"
  fi
}

# Open specified xcode project or worspace, or open a workspace or project in specified directory
xcode() {
  
  dir=`pwd`
  
  if [[ "$1" != "" ]] ; then
    if [ ! -d $1 ] ; then
      open -a Xcode $1
      return
    else
      dir=$1
    fi
  fi

  workspaces=( $(ls -d $dir/*.xcworkspace 2>/dev/null) )
  projects=( $(ls -d $dir/*.xcodeproj 2>/dev/null) )

  case ${#workspaces[@]} in
  0)
    case ${#projects[@]} in
    0)
      echo -e "\033[31mNo Xcode projects found in `dirname $dir`\033[39m"
      sleep 100
      return
      ;;
    1)
      open -a Xcode ${projects[0]}
      return
      ;;
    esac
    ;;
  1)
    open -a Xcode ${workspaces[0]}
    return
    ;;
  esac

  echo -e "\033[31mMore than one project or workspace found:\033[39m"
  echo ""
  ls -d *.xcworkspace *.xcodeproj
  echo ""
  echo -e "\033[32mPlease specify one.\033[39m"
}


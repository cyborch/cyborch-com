#!/bin/bash

has() {
  command -v $1 >/dev/null 2>&1
}

me=`whoami`
if has finger ; then
  full_name=`finger $me | awk -F: '{ print $3 }' | head -n1 | sed 's/^ //'`
elif has getent ; then
  full_name=`getent passwd $me | cut -d ':' -f 5 | cut -d ',' -f 1`
else
  echo -n "What is your name?: "
  read full_name
fi

echo -n "What email address would you like to associate with your git account?: "
read email
echo ""

cd
echo "Getting .bash_profile..."
curl -O http://cyborch.com/dotfiles/.bash_profile
echo "Getting .gitconfig..."
curl http://cyborch.com/dotfiles/.gitconfig 2>/dev/null | sed "s/YOUR_NAME/$full_name/;s/YOUR_CENTRAL_REPO_USER_EMAIL/$email/" > .gitconfig
echo "Getting .gitignore_global..."
curl -O http://cyborch.com/dotfiles/.gitignore_global
echo "Getting .screenrc..."
curl -O http://cyborch.com/dotfiles/.screenrc

if [[ `uname` == "Darwin" ]] ; then
  if [[ ! has xcode-select ]] ; then
    echo "Install Xcode first!"
    exit -1
  fi

  echo "Installing Xcode CLI..."
  xcode-select --install

  echo "Installing homebrew..."
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

  echo "Installing bash completions..."
  brew install bash-completion

  echo "Installing bash git completions..."
  (cd /usr/local/etc/bash_completion.d && curl -O https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash && chmod +x git-completion.bash)

  source .bash_profile

  echo "Installing Fastlane..."
  brew cask install fastlane

  echo "Installing CocoaPods..."
  sudo gem install cocoapods
fi

echo -n "Install .ssh/config? (no): "
read should_install_ssh_config

if [[ "$should_install_ssh_config" == "yes" ]] ; then
  mkdir -p .ssh && chmod 600 .ssh
  (cd .ssh && curl -O http://cyborch.com/dotfiles/.ssh/config)
fi


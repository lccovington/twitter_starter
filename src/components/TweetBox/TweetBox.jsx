import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  function handleOnTweetTextChange(e) {
    props['setTweetText'](e.target.value);
  }

  function handleOnTweetSubmit() {
    let newTweet = {
      name: props['userProfile'].name,
      handle: props['userProfile'].handle,
      text: props['tweetText'],
      comment: 0,
      retweets: 0,
      likes: 0,
      id: props['tweets'].length
    }

    props['setTweets'](props['tweets'].concat([newTweet]))
    props['setTweetText']("")
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props['tweetText']} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props['tweetText']} />
        <TweetSubmitButton tweetText={props['tweetText']} handleOnSubmit={handleOnTweetSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  console.log(props.tweetText)
  return <span>{139 - props.tweetText.length}</span>
}

export function TweetSubmitButton(props) {

  let disableFlag = false

  if (props.tweetText == "" || props.tweetText == undefined || props.tweetText.length > 140) {
    disableFlag = true
  }

  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={disableFlag} onClick={props.handleOnSubmit}>Tweet</button>
    </div>
  )
}

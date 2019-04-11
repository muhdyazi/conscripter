import Helmet from 'react-helmet'
import Header from '../components/header';
import Markdown from 'react-markdown'
import css from '../pages/index.scss'

export default function MarkdownPage({
  title,
  source
}) {
  return (
    <div className={css.root}>
      <Helmet>
        <title>{title} | Conscripter</title>
        <meta charSet="utf-8"/>
        <meta name="description" content="Conscripter is a tool for creating conlang script fonts from SVG using contextual alternates and ligatures."/>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Helmet>
      <Header/>
      <div className={css.textpanel}>
        <Markdown source={source}/>
      </div>
    </div>
  )
}
import styles from './index.less';

import EditorContainer from '../components/EditorContainer';

export default function IndexPage() {
  return (
    <div style={{ height: '100vh' }}>
      <h1 className={styles.title}>cssplay</h1>
      <EditorContainer />
    </div>
  );
}

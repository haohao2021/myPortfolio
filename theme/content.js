export default ({ children, meta = {} }) => (
  <div className={meta.lang ? 'lang-' + meta.lang : ''}>
    {children}
    <style jsx>{`
      div {
        margin: 2rem 0 5rem;
        font-family: 'Futura', sans-serif;
      }
      div :global(p) {
        margin-top: 1.5rem;
        margin-bottom: 0;
      }
      div :global(img) {
        max-width: 100%;
      }

      div.lang-zh :global(p),
      div.lang-zh :global(li) {
        text-align: justify;
        text-justify: auto;
      }
      div.lang-zh :global(em) {
        text-emphasis: filled dot;
        text-emphasis-position: under;
        font-style: inherit;
      } 
      

      div :global(li > p) {
        margin-top: 0;
      }

      div :global(li) {
        line-height: 1.7;
      }
      
      :global(a) {
        color: black; /* 设置超链接的颜色为黑色 */
        text-decoration: none; /* 取消超链接的下划线 */
      }

      /* 添加作品集样式 */
      div :global(.portfolio-grid) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        padding: 0;
      }

      div :global(.portfolio-item) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      div :global(.portfolio-image) {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }

      div :global(.portfolio-description) {
        text-align: center;
      }

      @media all and (max-width: 640px) {
        div :global(.portfolio-grid) {
          grid-template-columns: 1fr;  /* 在移动设备上堆叠图片 */
        }
      }
    `}</style>
  </div>
)

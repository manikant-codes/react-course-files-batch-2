import React, {  useState } from "react";
import { useScroll } from "../customHooks/useScroll";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const scroll = useScroll();

  console.log("A");

  console.log("scroll", scroll);

  console.log("C");

  return (
    <div>
      <h1
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "grey",
        }}
      >
        {scroll}
      </h1>
      <div>
        <h1 style={{ marginTop: "100px" }}>{count}</h1>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          ++
        </button>
      </div>
      <br />
      <hr />
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        dolorum. Assumenda labore nemo in facere aliquid, reprehenderit
        recusandae, dicta unde adipisci minima earum, impedit nobis quis.
        Perferendis natus praesentium autem officiis? Eos, repudiandae numquam.
        Voluptatum ratione provident saepe quidem quia nam harum, animi impedit
        voluptate blanditiis aliquam expedita eos, autem magni natus voluptatem
        fugiat ut sunt aperiam culpa ipsa earum iusto. Laudantium porro maxime
        veniam magni a reiciendis placeat beatae, eaque, cum voluptatibus
        corrupti officia! Vero hic, nemo pariatur laudantium tempora vitae sequi
        eligendi praesentium dolorum asperiores consectetur, corrupti optio,
        nihil minus quos ad. Ut, culpa? Debitis repellat qui deleniti explicabo,
        placeat reiciendis aut. Quasi minus hic repellendus dicta maxime
        inventore, molestias magni sed odio recusandae excepturi enim autem,
        omnis adipisci molestiae amet exercitationem nulla earum, rerum
        voluptate quidem? In, aliquid labore molestiae tenetur illo iste libero
        ad dignissimos vel quidem veritatis, reiciendis accusantium nobis quae
        eaque dolorum nemo iure ipsum possimus temporibus quisquam? Aliquam
        reprehenderit ipsam veritatis quo quod magni perspiciatis nam obcaecati.
        Ea repellendus porro voluptas optio sint maiores expedita, consequatur
        a, aperiam nam fuga dignissimos minus in officia, blanditiis numquam
        dolore nesciunt aut illum modi. Facilis, ad vitae quos exercitationem
        porro in molestias cum aut, consequatur, quia atque fugit vel est
        dolore? Cumque, voluptatem mollitia! Ratione soluta hic voluptatibus
        accusamus commodi perspiciatis iusto! Rerum est odio vero pariatur
        soluta dolore dolores eligendi, earum officia atque, incidunt animi
        exercitationem quod nulla ipsum magnam, laudantium iste corrupti?
        Voluptatem, mollitia. Eligendi deleniti ipsa quis! Obcaecati itaque
        quos, nulla, eum laboriosam nobis saepe a consequuntur explicabo
        reiciendis molestiae modi fugiat quas officia provident doloremque
        tempora. Doloremque consequatur optio natus, voluptatibus quae provident
        excepturi perferendis quos ratione nesciunt laboriosam, temporibus sint
        corrupti illum porro reprehenderit inventore eligendi. Assumenda, harum
        facilis. Maiores nisi perspiciatis quas iste deserunt! Omnis quas rerum
        atque, eius voluptatum nulla iusto nisi, itaque illo reprehenderit
        minima aliquid veniam odit voluptatem numquam at quaerat adipisci
        inventore dolorem blanditiis. Commodi ipsum nostrum libero, esse aut
        illo hic expedita veritatis. Nemo eum ipsum voluptatum nostrum fugiat
        ipsa sequi quam, exercitationem recusandae magnam illo reiciendis
        dignissimos autem harum, fugit molestias culpa voluptatem blanditiis
        neque facere? Incidunt labore at temporibus modi reiciendis explicabo
        optio odio sequi voluptatum quo nisi, non, aliquam nam quisquam?
        Similique, omnis est. Minus accusamus maiores aperiam autem inventore
        aliquid repellat ipsum voluptatum facere, ea qui aspernatur ab
        molestiae? Nobis officiis nam minima incidunt, itaque eligendi nihil
        facilis illum corporis consequuntur reiciendis eum veniam libero sit
        aliquid at adipisci dignissimos delectus! Quos dolorem minus maiores
        veritatis animi voluptate quo tempore cum ab, vero nemo vel labore
        aliquid corporis perferendis assumenda cumque doloremque obcaecati
        quibusdam enim recusandae voluptates in! Neque, dicta consectetur ullam
        quas eveniet accusamus ea fugiat architecto quaerat perspiciatis
        quibusdam recusandae quos, debitis dolore quisquam tempore a in officiis
        officia! Molestias deserunt temporibus qui at veniam architecto
        voluptatem, soluta repellat rem quibusdam nemo! Exercitationem
        temporibus ea ipsum dicta? Rem earum dolore perspiciatis, excepturi
        laudantium dolor harum similique quos expedita enim nam ducimus
        doloremque maxime laborum obcaecati maiores, veniam libero blanditiis
        labore magni voluptate quisquam explicabo quo. Nihil iusto illo
        doloribus perspiciatis. Consequuntur nulla quis ipsam nam, quo doloribus
        repellat alias perferendis iste in recusandae nesciunt. Sapiente
        asperiores, eos reprehenderit quos quas aliquid? Ipsam fugit provident
        eos enim id modi temporibus minima iusto architecto quae minus suscipit,
        illo, ad odit. Dolorum ad accusamus quo repudiandae neque praesentium
        assumenda nesciunt omnis veniam in sit porro, distinctio quis deleniti
        aliquam voluptas. Non culpa mollitia sunt natus exercitationem
        necessitatibus soluta totam, repellat quis deleniti, dicta ipsam quidem
        corporis fugit? Eos illo beatae provident quis ipsam, labore
        exercitationem quo rerum aspernatur distinctio, nisi est repudiandae.
        Fugiat officia earum atque hic! Nobis, eaque consequatur placeat nihil
        quas, at quam excepturi, ex sint aperiam modi. Possimus numquam dolorem
        facilis ad placeat, corrupti, error natus beatae, delectus sint dolorum.
        Minima vero sint mollitia earum libero? Maiores aspernatur optio
        laboriosam hic recusandae dolorem, eius nostrum ad, sapiente animi
        nobis, distinctio ipsa numquam nam? Deserunt nam tempora sint totam ex
        commodi. Quis, beatae harum. Incidunt commodi minima tempora nesciunt
        dignissimos vel! Neque, fugit quod doloribus doloremque, suscipit sit
        quasi enim asperiores placeat unde nostrum repudiandae labore quia
        numquam consequuntur officia molestias nobis eius, aperiam provident
        voluptatem esse necessitatibus totam dolor! Voluptatum quod aliquam
        voluptatibus! Nihil repellendus accusantium, fugiat eos neque hic nisi
        architecto ducimus in illo iure asperiores perspiciatis, quisquam
        aliquid veniam incidunt veritatis inventore placeat voluptate, similique
        omnis voluptates eligendi. Tempore magnam sit inventore modi officia.
        Cum eveniet modi soluta dolore illo perferendis, nemo ullam sit quas
        quisquam perspiciatis consequatur a, doloremque at vero delectus atque
        possimus nostrum dicta? Minima omnis culpa hic magni quis quisquam quos
        veniam at. Eaque distinctio doloremque totam a error, quas debitis
        aliquid non possimus, nemo itaque mollitia ipsa inventore aut quia sit
        repudiandae laborum? Aliquam architecto aperiam non veniam fugit quo
        similique! Rem, vero. Quod placeat quia pariatur cupiditate? Magnam
        consequuntur doloremque sit odit adipisci, voluptate incidunt dolor
        neque vitae labore quos debitis numquam reprehenderit perferendis sint
        amet soluta eaque saepe, cupiditate facere necessitatibus nemo omnis?
        Dolores necessitatibus tempore perspiciatis soluta voluptatibus, dolore
        deleniti iste cumque doloribus ab in? Quibusdam labore sequi dicta
        placeat optio vero inventore dolor quaerat cumque expedita, nam esse
        debitis reiciendis obcaecati eos ad blanditiis. Quae, ullam a vitae
        dolorum quod nesciunt. Corporis officia placeat recusandae ut,
        perspiciatis illo assumenda! Aspernatur accusantium reprehenderit
        explicabo esse sit eligendi laudantium id dolor inventore error culpa
        mollitia cum consequuntur hic consectetur obcaecati blanditiis incidunt
        a facilis ipsum numquam magni, nisi qui nobis! Eaque reprehenderit
        laboriosam qui vitae rerum quae ipsam, tempore cum beatae accusantium
        cupiditate voluptas, officiis ratione et aliquam debitis in totam.
        Voluptatum eaque, non ducimus veritatis totam debitis sint corrupti
        explicabo velit reiciendis. Placeat incidunt, fuga delectus mollitia
        cumque voluptates. Facere nesciunt eum nisi debitis. Quaerat aut dolore
        amet quidem optio voluptatem impedit consectetur maxime, ut, aspernatur
        cumque dolorem itaque et voluptate fugiat at ratione molestiae. Nostrum
        sit corporis fugit repudiandae perferendis temporibus, quos,
        consequuntur reiciendis quasi neque ullam? Laboriosam perspiciatis error
        eum quaerat exercitationem placeat voluptatem quis saepe quae, culpa
        similique atque quos sunt quibusdam hic ratione rerum eaque debitis
        voluptas molestias dicta sapiente blanditiis corporis eos? Ducimus a
        facilis, deserunt molestias aspernatur assumenda nisi maxime dolorem
        incidunt quasi tempore. Maiores odit quod voluptate nostrum quae nisi
        nulla vitae delectus, est, ratione hic reiciendis eveniet deleniti vel
        necessitatibus dolorem? Perferendis, natus deserunt possimus magni, eius
        sit consectetur voluptatibus quod dicta laborum iure ut temporibus
        asperiores incidunt sed eveniet iste minus earum non officiis quas,
        commodi odit nesciunt. A animi tempore corporis ratione dignissimos ex
        est? Vel, labore. Earum, possimus odit impedit accusamus commodi dolore,
        ex fugiat quia modi a ipsa. Odio ipsam odit animi repellat veritatis
        eius tempora amet sapiente magni neque quis eligendi, rem, illo officiis
        cupiditate ea. Tempora culpa ipsam hic dignissimos quas similique
        accusamus pariatur porro sed enim distinctio esse at qui cumque, nobis
        quis excepturi dolores corporis quos sequi quidem, ex suscipit! Nulla
        molestiae iure ipsam voluptate odit quo quod ea ducimus, commodi qui!
        Inventore iure a, error modi ullam magnam voluptatibus repudiandae atque
        sapiente quasi dolorum unde dolor reprehenderit saepe quae corrupti
        alias! Mollitia fugit repellendus accusantium culpa et consequatur
        dolorum aliquam molestiae. Vitae, assumenda aliquid. Voluptas possimus
        dolorum saepe! Culpa delectus sit repellendus reiciendis. Vero
        voluptatum, eius ab magnam quas ipsam laborum architecto veniam illum
        nam nesciunt a tempora vel praesentium. Necessitatibus, quae cupiditate.
        Suscipit voluptas laborum soluta quia rerum, facilis commodi saepe enim
        dignissimos quae assumenda voluptatibus ea eaque vel odio? Debitis
        quidem ea exercitationem iure, delectus, unde at eveniet nostrum,
        recusandae quis et voluptatum quae? Quos, voluptatibus nulla eius optio
        possimus blanditiis ea distinctio esse magni, et, sit quod debitis earum
        aliquam sint error expedita? Quidem recusandae at repellendus beatae
        modi laborum nam, nobis obcaecati aut impedit facilis tempora illo ipsam
        repellat quia, placeat quam architecto ea corporis incidunt deleniti
        sapiente quo numquam animi. Vel corrupti quas vitae deleniti, eos
        voluptatum id temporibus ipsa sunt esse quae iste officia hic velit,
        nihil quidem saepe laboriosam. Provident repellendus possimus non iste.
        Unde sunt delectus corporis corrupti itaque harum. Est recusandae
        explicabo suscipit minima veritatis, nobis sequi libero alias,
        voluptatum iure porro eaque quasi iste! Quidem debitis earum saepe
        nesciunt cupiditate sunt doloremque. Id dolorem ea obcaecati ipsum
        impedit, odit amet itaque nisi eligendi dolor dolores, praesentium
        numquam nostrum, laboriosam aperiam maxime adipisci dignissimos ullam.
        Perferendis dolores quisquam ratione, nemo quos tempora optio vel, odit
        rem natus impedit maxime. Nam tempore illo cupiditate fugiat? Odio
        officia quasi tempora placeat id accusantium aut, ut officiis quidem
        aliquam distinctio deserunt. Optio exercitationem recusandae repellat
        debitis minus! Voluptate recusandae perspiciatis natus hic aperiam enim
        laboriosam obcaecati nihil quasi ipsam maiores similique animi quidem,
        voluptas reiciendis! Placeat unde minus voluptas praesentium
        exercitationem perspiciatis quas nam dignissimos velit, est veniam atque
        dolores delectus fugiat a cumque soluta maxime laborum possimus
        molestiae ullam corporis vel officiis. Voluptas, dolore? Pariatur
        inventore cum qui commodi eaque fugit rem nemo temporibus minus quam
        excepturi assumenda quaerat, nulla autem, recusandae tenetur. Adipisci
        facere enim, architecto doloribus, dolores, voluptatum aperiam vel
        commodi exercitationem repellat libero? Atque laborum voluptatibus
        quibusdam repellat, necessitatibus ea numquam magnam sit labore nulla
        consequuntur aut molestias, fugit, recusandae dolore vitae laboriosam
        aliquam vel! Unde vel quibusdam minus perspiciatis maxime ex saepe harum
        ratione alias ut dolorum nostrum animi, dolor eligendi ea, pariatur
        fugiat consequatur eius molestias adipisci? Iusto, alias quae at quis
        recusandae perferendis non. Consequuntur atque ipsa reprehenderit
        eligendi fugiat consequatur provident vitae cum enim ratione omnis
        repudiandae optio, placeat labore, exercitationem ex praesentium
        perferendis sunt necessitatibus ullam? Laboriosam, accusantium? Ratione,
        temporibus et architecto earum dolorum consequuntur deleniti, nemo
        maxime pariatur ipsam quidem, voluptatibus ut deserunt eius rerum
        voluptate officiis. Est aliquam rerum, repellendus voluptatum architecto
        ipsa nesciunt provident voluptates iusto nisi consequuntur dolorem
        perferendis distinctio culpa assumenda eius tenetur amet. Omnis, nisi
        tenetur. Illo eligendi quidem exercitationem voluptatem a perspiciatis
        veniam architecto quisquam, nam sint dignissimos temporibus quos sit
        reprehenderit praesentium, earum optio voluptate quas consequatur neque?
        Voluptatem quibusdam odio earum, rerum at tenetur cum neque itaque,
        ratione explicabo reprehenderit maiores commodi aut totam, id aliquid
        libero atque provident ullam laborum vitae voluptate pariatur nobis ex.
        Ducimus ipsa, vitae provident libero delectus, quasi consequatur amet
        suscipit, nemo veritatis sunt! Nemo exercitationem accusamus non nisi
        porro provident, qui at, quos quidem molestiae sapiente, dolor ut
        adipisci! Atque officiis sunt natus praesentium voluptatibus corrupti
        distinctio deleniti eligendi. Atque expedita consequatur repellendus,
        veniam laboriosam quas vitae, magni, in rem ea optio. Nesciunt alias
        officia asperiores autem similique aperiam quis excepturi voluptates,
        obcaecati, nobis optio distinctio pariatur inventore sunt harum
        recusandae velit. Libero, praesentium a incidunt quasi minima accusamus
        natus ducimus non eveniet architecto, temporibus nulla rerum autem iure
        minus odio assumenda totam possimus at vitae ut in, voluptas quae? Dolor
        quisquam et sunt omnis dolores nostrum error deleniti mollitia veniam,
        laboriosam consequatur, ipsum, suscipit quis cumque dolorem! Mollitia
        aspernatur, maiores saepe consectetur fuga similique cum beatae aut
        fugit omnis! Perferendis, autem eligendi ipsam tenetur deserunt maiores
        eaque iure at minus quo rem neque exercitationem adipisci similique
        ullam commodi fuga numquam quam natus est quas, provident nobis non.
        Nesciunt nulla, qui numquam praesentium dolore, autem deleniti quas
        animi quae similique et ad! Laboriosam, neque ad? Dolor explicabo
        aperiam doloremque reiciendis repellendus. Dolorem laudantium quas quae,
        temporibus nobis dicta officia asperiores voluptatum dolor excepturi
        perspiciatis deleniti reiciendis praesentium quibusdam expedita qui
        magnam consequuntur dolore, quidem molestias illo quisquam. Maiores
        facilis molestiae, non vel blanditiis consectetur beatae quos dolore
        corporis culpa inventore cum corrupti et eos voluptate accusamus! Ullam
        quam saepe perspiciatis dolorem accusamus illo cum aperiam aspernatur,
        iure cumque quas, dignissimos repellendus adipisci sed. Laboriosam sed,
        qui aperiam natus architecto placeat, iusto in nulla facilis quos
        officiis iste cum reprehenderit. Dolorum illo quas consectetur quod.
        Dicta aut molestiae sunt voluptatem, vero tempora explicabo voluptatibus
        odit beatae dolores! Reprehenderit aspernatur iusto impedit omnis
        mollitia quaerat blanditiis aut unde quae. Quibusdam delectus ipsam,
        eaque saepe aliquam, cupiditate laudantium omnis atque a asperiores
        laboriosam ad sit! Optio qui tempora sit illo tempore, atque est
        sapiente facere quam minus, ad commodi, sequi ducimus fuga fugiat!
        Impedit, autem.
      </p>
      {scroll > 500 && (
        <button
          style={{ position: "fixed", right: 60, bottom: 60 }}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
}

export default UseEffectDemo;

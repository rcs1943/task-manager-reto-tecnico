import MainScreen from "@/shared/layout/main-screen/MainScreen";
import { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import TaskIndicators from "./components/task-indicators/TaskIndicators";

interface Props {
  taskId: string | string[];
}

const TaskDetail = ({ taskId }: Props) => {
  useEffect(() => {
    console.log("El nuevo taskId es", taskId);
  }, [taskId]);
  return (
    <MainScreen>
      <Text className="text-7xl font-medium text-headerColor">TITULO XD.</Text>
      <TaskIndicators priority="high" status="pending" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-textColor text-xl leading-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde
          esse, sapiente doloribus natus fuga. Recusandae molestiae commodi eum
          sed repellendus, velit maxime aliquam nesciunt nam doloribus nobis
          cumque porro. Quam sapiente quos minus, illo cupiditate qui expedita
          incidunt assumenda quisquam voluptates quia ad quis. Unde tempora
          porro labore assumenda ad molestias laudantium aut hic illo.
          Consequatur non aliquam soluta. Aspernatur maiores iusto quae ipsam
          doloribus dolorum debitis sapiente tenetur. Magnam quos distinctio
          corrupti fugit aut accusantium pariatur! Sit quaerat itaque excepturi
          distinctio. Ex iusto rem officiis neque saepe vitae? Deleniti
          voluptate autem iure, esse in delectus modi reiciendis architecto
          reprehenderit enim nulla adipisci, eaque quas. Sequi magnam labore quo
          optio, quibusdam officia modi omnis vel cumque aliquam dicta natus.
          Illum amet deserunt nostrum blanditiis necessitatibus placeat quam
          voluptate laborum maxime nesciunt sequi porro consectetur voluptas
          commodi, facere, totam unde quidem tenetur consequatur optio. Expedita
          deleniti quasi fuga modi aspernatur. Velit ipsam laborum enim harum
          esse quo. Quaerat sint, eaque ad nobis incidunt impedit inventore
          illum veritatis nam! Adipisci repellendus, odio dolores debitis saepe
          necessitatibus a cumque explicabo dicta accusantium! Aspernatur beatae
          saepe consequuntur cumque quaerat autem, amet consectetur distinctio
          voluptas quo! Consequuntur suscipit alias dolorum, dolor ex omnis
          laborum minima illo mollitia optio? Quod maiores nihil labore
          temporibus illum? Nulla suscipit odio magnam assumenda voluptatum modi
          deserunt, distinctio reprehenderit dolore, commodi ea velit? Aut,
          corrupti, quasi earum, soluta vel repellat nobis mollitia totam
          nostrum inventore exercitationem nesciunt amet ipsum? Alias odio eos
          est minima vitae quidem consequatur consequuntur dolores nemo ipsam,
          ipsum molestias. Praesentium consequuntur eligendi in! Provident hic
          similique minima nihil adipisci libero blanditiis, non sapiente
          architecto culpa? Ab commodi facere excepturi doloribus quaerat
          reiciendis deleniti unde! Nobis, dolores facere porro aliquam quae
          nemo excepturi obcaecati, dolore qui animi esse similique molestias
          sint facilis officiis quidem voluptates exercitationem. Aliquam dolor
          rerum quaerat. Voluptatem in aspernatur veniam. Soluta quibusdam quae
          velit nobis! Nostrum labore asperiores voluptatibus iure minus. Libero
          laudantium cumque iure! Dolore eveniet corporis non incidunt suscipit
          laborum! Esse magni explicabo dicta itaque, illo dolorum libero
          inventore aspernatur voluptatum nemo perferendis voluptatibus pariatur
          ex. Earum, itaque architecto odit minima nisi voluptatibus voluptatum.
          Dicta delectus laborum at a fugit. Dolores veniam assumenda debitis
          quae? Voluptates debitis aliquid fugiat esse enim, maxime maiores, sit
          autem hic vitae corrupti ad quo vel obcaecati illum facilis numquam
          ipsa quidem explicabo eos suscipit! Tempora iste dicta et distinctio,
          reprehenderit ipsum iure, impedit vel voluptatem explicabo excepturi
          necessitatibus officia deserunt dolorum corrupti eaque earum eius est
          molestiae? Rem accusantium ea ipsum delectus soluta quaerat. Doloribus
          minus placeat dolorum nisi consequuntur perspiciatis laborum, cumque
          laudantium necessitatibus et fuga! Impedit, qui! Magni totam ut, rem
          voluptate iste minima a. Ullam vitae perspiciatis possimus nobis
          officia dolore! Voluptate provident deserunt quos ducimus nihil amet
          sint adipisci doloremque consequuntur, nam asperiores! Delectus,
          laborum et! Aliquam adipisci dolorem quis voluptates id, temporibus
          quaerat laudantium inventore modi, hic provident praesentium. Nemo
          numquam nostrum nulla sapiente odit, suscipit unde fuga quis itaque
          accusamus, necessitatibus, alias nesciunt. Minus reprehenderit esse et
          labore nostrum expedita sapiente nihil, repudiandae, quidem sed
          voluptates quasi fugiat. Dolores mollitia ad adipisci velit quidem
          fuga, vero, nemo iure aliquid voluptatum nisi laudantium animi. Sit
          rerum perferendis voluptatibus nostrum commodi animi quibusdam,
          quidem, atque minus reiciendis aliquam repellat veritatis. Delectus
          ratione consectetur nostrum doloremque. Ab veritatis maxime expedita
          in soluta cupiditate ipsum modi, accusamus quam consequatur cumque a
          saepe molestias aliquid, iusto fuga aut vel quidem error rem
          assumenda. Dolorum quas soluta debitis! Vel, adipisci non eum maxime
          fugit beatae pariatur! Aut nihil, nobis neque dolorum id ducimus
          commodi consectetur vel tempore placeat reprehenderit nam, ipsa sequi
          enim aperiam. Odio eaque laudantium ipsam corporis eius quasi magnam
          mollitia neque illum beatae maiores aliquam natus voluptatem,
          repellendus repudiandae molestiae nisi voluptatum autem quod vel hic!
          Dolor modi quia deserunt error? Incidunt maxime eveniet at ipsam
          possimus magni quae harum corrupti, quis corporis, quia nulla earum
          dolorem nobis odit unde, est ratione placeat error. Laudantium,
          distinctio deserunt! Mollitia voluptatum dolorum culpa? Beatae
          inventore facere mollitia? Adipisci animi nihil, voluptate optio sint
          dignissimos eaque, sunt molestiae blanditiis atque quo facilis quis
          qui amet dolor. Itaque, veritatis adipisci? Reprehenderit in quo quis
          facere. Fugiat autem a tempora aperiam sed voluptatum, voluptates quo
          voluptate illum illo doloremque saepe repellat distinctio culpa
          mollitia explicabo, eius enim nihil suscipit eum odio? Cum aspernatur
          aut culpa dicta! Ad, saepe veniam dolorem sapiente recusandae enim
          dolores eius molestias numquam reiciendis culpa iste dicta? Nobis
          dolor, unde, porro, ab minus veritatis aliquam sint eveniet asperiores
          illum laudantium ipsum. Repudiandae. Fugit aliquam laudantium
          perspiciatis corporis obcaecati. Excepturi ab ipsam nostrum aperiam!
          Quia, facilis. Ex, dolore cumque cum dicta beatae veritatis tempore
          commodi illo sunt veniam earum magni saepe, quod molestiae! Illum, qui
          tenetur suscipit, debitis ex aut pariatur eligendi quis sapiente
          corporis velit voluptatum reprehenderit, voluptatem nisi alias ipsam
          exercitationem. Laudantium quas odit repellat optio minus officiis
          natus doloremque vitae. Amet impedit optio accusamus minus. Culpa, qui
          fugiat veniam suscipit labore ratione porro quibusdam incidunt ab,
          quo, accusantium voluptatibus placeat expedita delectus dignissimos
          quas dolores nobis error obcaecati! Similique, ea! Dolorem dolorum
          autem possimus iusto aperiam vitae itaque laborum ex quibusdam? Quia
          sit, rerum, voluptates aliquid placeat quo earum aspernatur soluta
          nobis necessitatibus adipisci dolor ratione ipsum sequi molestias eum.
          Deserunt perspiciatis itaque libero consequuntur, fugiat vero, sequi
          ab consectetur error soluta illo nihil minima neque necessitatibus.
          Repellat eum excepturi eligendi optio culpa nemo ratione alias! Quo
          illo accusamus id.
        </Text>
      </ScrollView>
    </MainScreen>
  );
};

export default TaskDetail;

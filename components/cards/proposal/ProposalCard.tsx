import { FunctionComponent } from "react";
import Image from "next/image";

interface ProposalDetail {
  title: string;
  creator: string;
  minimum: number;
  value: number;
  coin: string;
  thumb: string;
  enddate: string;
  endtime: string;
}

const ProposalCard: FunctionComponent<ProposalDetail> = (props) => {
  return (
    <div className="rounded-xl shad p-4 pb-8 bg-white flex flex-col gap-y-4">
      <div className="w-full overflow-hidden rounded-xl relative h-60">
        <Image src={props.thumb} layout="fill" objectFit="cover" />
        <div className="absolute left-4 px-3 py-1 rounded-full text-xl end-bubble top-6 bg-primary-hover text-white">
          Ends {props.enddate} at {props.endtime}
        </div>
      </div>
      <div>
        <h2 className="proposal-title">{props.title}</h2>
        <h4 className="proposal-creator">{props.creator}</h4>
      </div>
      <div>
        <h5 className="proposal-value">
          Valued at {props.value.toFixed(2)} {props.coin}{" "}
        </h5>
        <h5 className="proposal-minimum">
          Voting minimum {props.minimum.toFixed(2)} {props.coin}{" "}
        </h5>
      </div>
    </div>
  );
};

export default ProposalCard;

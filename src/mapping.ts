import {
  OmniEvent,
  OmniEvent1,
  OmniEvent2
} from "../generated/OmniDataGateway/OmniDataGateway";
import { OmniData } from "../generated/schema";
import { ipfs } from "@graphprotocol/graph-ts";

export function handleOmniEvent(event: OmniEvent): void {
  let data = OmniData.load(event.params.cid.toString());

  if (data == null) {
    data = new OmniData(event.params.cid.toString());
    data.cid = event.params.cid.toString();
    data.contractAddress = event.params.contractAddress.toHexString();

    let metadata = ipfs.cat(data.cid);
    data.metadata = metadata ? metadata.toString() : ''
  }
  data.contractAddress = event.params.contractAddress.toHexString();
  data.save();
}

export function handleOmniEvent1(event: OmniEvent1): void {
  let data = OmniData.load(event.params.cid.toString());

  if (data == null) {
    data = new OmniData(event.params.cid.toString());
    data.cid = event.params.cid.toString();
    data.contractAddress = event.params.contractAddress.toHexString();

    let metadata = ipfs.cat(data.cid);
    data.metadata = metadata ? metadata.toString() : ''
  }
  const uniqueId = event.params.uniqueId;
  if (uniqueId) {
    data.uniqueId = uniqueId.toHexString();
  }
  data.contractAddress = event.params.contractAddress.toHexString();
  data.save();
}

export function handleOmniEvent2(event: OmniEvent2): void {
  let data = OmniData.load(event.params.cid.toString());

  if (data == null) {
    data = new OmniData(event.params.cid.toString());
    data.cid = event.params.cid.toString();
    data.contractAddress = event.params.contractAddress.toHexString();

    let metadata = ipfs.cat(data.cid);
    data.metadata = metadata ? metadata.toString() : ''
  }
  const uniqueId = event.params.uniqueId;
  if (uniqueId) {
    data.uniqueId = uniqueId.toString();
  }
  data.contractAddress = event.params.contractAddress.toHexString();
  data.save();
}

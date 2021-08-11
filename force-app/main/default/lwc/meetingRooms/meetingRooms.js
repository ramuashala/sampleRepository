import { LightningElement, track} from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track selectedRoomInfo;
    meetingRoomsInfo = [{roomName:'A-01', roomCapacity:'2'},
                        {roomName:'A-02', roomCapacity:'3'},
                        {roomName:'A-03', roomCapacity:'4'},
                        {roomName:'B-01', roomCapacity:'6'},
                        {roomName:'B-02', roomCapacity:'8'},
                        {roomName:'B-03', roomCapacity:'10'},
                        {roomName:'C-01', roomCapacity:'12'}];
        onTileSelectHandler(event){
        const detailEvent = event.detail;
        this.selectedRoomInfo = detailEvent;
    }

    constructor(){
        super();
        this.template.addEventListener('tileclick', this.onTileSelectHandler.bind(this));
    }
    
}
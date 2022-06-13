export interface File extends Blob {
    readonly lastModified: number;
    readonly name: string;
}
/*authSlice.ts*/
export interface PROPS_AUTHEN {
    email: string;
    password: string;
}
export interface PROPS_PROFILE {
    id: number;
    nickName: string;
    img: File | null;
}
export interface PROPS_NICKNAME {
    nickName: string;
    userProfile: number;
}

/*targetSlice.ts*/
export interface PROPS_NEWTARGET {
    main: string;
    sub1: string;sub2: string;sub3: string;sub4: string;sub6: string;sub7: string;sub8: string;sub9: string;
    todo1_1: string | null;todo1_2: string | null;todo1_3: string | null;todo1_4: string | null;todo1_6: string | null;todo1_7: string | null;todo1_8: string | null;todo1_9: string | null;
    todo2_1: string | null;todo2_2: string | null;todo2_3: string | null;todo2_4: string | null;todo2_6: string | null;todo2_7: string | null;todo2_8: string | null;todo2_9: string | null;
    todo3_1: string | null;todo3_2: string | null;todo3_3: string | null;todo3_4: string | null;todo3_6: string | null;todo3_7: string | null;todo3_8: string | null;todo3_9: string | null;
    todo4_1: string | null;todo4_2: string | null;todo4_3: string | null;todo4_4: string | null;todo4_6: string | null;todo4_7: string | null;todo4_8: string | null;todo4_9: string | null;
    todo6_1: string | null;todo6_2: string | null;todo6_3: string | null;todo6_4: string | null;todo6_6: string | null;todo6_7: string | null;todo6_8: string | null;todo6_9: string | null;
    todo7_1: string | null;todo7_2: string | null;todo7_3: string | null;todo7_4: string | null;todo7_6: string | null;todo7_7: string | null;todo7_8: string | null;todo7_9: string | null;
    todo8_1: string | null;todo8_2: string | null;todo8_3: string | null;todo8_4: string | null;todo8_6: string | null;todo8_7: string | null;todo8_8: string | null;todo8_9: string | null;
    todo9_1: string | null;todo9_2: string | null;todo9_3: string | null;todo9_4: string | null;todo9_6: string | null;todo9_7: string | null;todo9_8: string | null;todo9_9: string | null;
}
export interface PROPS_LIKED {
    id: number;
    main: string;
    current: number[];
    new: number;
}
export interface PROPS_COMMENT {
    text: string;
    target: number;
}
/*Target.tsx*/
export interface PROPS_EDITTARGET {
    id:number;
    main: string;
    sub1: string;sub2: string;sub3: string;sub4: string;sub6: string;sub7: string;sub8: string;sub9: string;
    todo1_1: string | null;todo1_2: string | null;todo1_3: string | null;todo1_4: string | null;todo1_6: string | null;todo1_7: string | null;todo1_8: string | null;todo1_9: string | null;
    todo2_1: string | null;todo2_2: string | null;todo2_3: string | null;todo2_4: string | null;todo2_6: string | null;todo2_7: string | null;todo2_8: string | null;todo2_9: string | null;
    todo3_1: string | null;todo3_2: string | null;todo3_3: string | null;todo3_4: string | null;todo3_6: string | null;todo3_7: string | null;todo3_8: string | null;todo3_9: string | null;
    todo4_1: string | null;todo4_2: string | null;todo4_3: string | null;todo4_4: string | null;todo4_6: string | null;todo4_7: string | null;todo4_8: string | null;todo4_9: string | null;
    todo6_1: string | null;todo6_2: string | null;todo6_3: string | null;todo6_4: string | null;todo6_6: string | null;todo6_7: string | null;todo6_8: string | null;todo6_9: string | null;
    todo7_1: string | null;todo7_2: string | null;todo7_3: string | null;todo7_4: string | null;todo7_6: string | null;todo7_7: string | null;todo7_8: string | null;todo7_9: string | null;
    todo8_1: string | null;todo8_2: string | null;todo8_3: string | null;todo8_4: string | null;todo8_6: string | null;todo8_7: string | null;todo8_8: string | null;todo8_9: string | null;
    todo9_1: string | null;todo9_2: string | null;todo9_3: string | null;todo9_4: string | null;todo9_6: string | null;todo9_7: string | null;todo9_8: string | null;todo9_9: string | null;
}

export interface PROPS_TARGET {
    id: number;
    loginId: number;
    userTarget: number;
    liked: number[];
    created_at:string,
    main: string;
    sub1: string;sub2: string;sub3: string;sub4: string;sub6: string;sub7: string;sub8: string;sub9: string;
    todo1_1: string | null;todo1_2: string | null;todo1_3: string | null;todo1_4: string | null;todo1_6: string | null;todo1_7: string | null;todo1_8: string | null;todo1_9: string | null;
    todo2_1: string | null;todo2_2: string | null;todo2_3: string | null;todo2_4: string | null;todo2_6: string | null;todo2_7: string | null;todo2_8: string | null;todo2_9: string | null;
    todo3_1: string | null;todo3_2: string | null;todo3_3: string | null;todo3_4: string | null;todo3_6: string | null;todo3_7: string | null;todo3_8: string | null;todo3_9: string | null;
    todo4_1: string | null;todo4_2: string | null;todo4_3: string | null;todo4_4: string | null;todo4_6: string | null;todo4_7: string | null;todo4_8: string | null;todo4_9: string | null;
    todo6_1: string | null;todo6_2: string | null;todo6_3: string | null;todo6_4: string | null;todo6_6: string | null;todo6_7: string | null;todo6_8: string | null;todo6_9: string | null;
    todo7_1: string | null;todo7_2: string | null;todo7_3: string | null;todo7_4: string | null;todo7_6: string | null;todo7_7: string | null;todo7_8: string | null;todo7_9: string | null;
    todo8_1: string | null;todo8_2: string | null;todo8_3: string | null;todo8_4: string | null;todo8_6: string | null;todo8_7: string | null;todo8_8: string | null;todo8_9: string | null;
    todo9_1: string | null;todo9_2: string | null;todo9_3: string | null;todo9_4: string | null;todo9_6: string | null;todo9_7: string | null;todo9_8: string | null;todo9_9: string | null;
}